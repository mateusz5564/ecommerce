import { createContext, useContext, useReducer } from "react";

const CartContext = new createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearCart: () => null,
  cartTotal: 0,
});

export const useCartContext = () => useContext(CartContext);

const addCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find(item => item.id === product.id);

  if (existingProduct) {
    return cartItems.map(item =>
      item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find(item => item.id === product.id);

  if (existingProduct.quantity > 1) {
    return cartItems.map(item =>
      item.id === product.id ? { ...product, quantity: item.quantity - 1 } : item
    );
  } else {
    return cartItems.filter(item => item.id !== product.id);
  }
};

const clearCartItem = (cartItems, product) => {
  return cartItems.filter(item => item.id !== product.id);
};

const ACTION_TYPES = {
  TOGGLE_CART: "TOGGLE_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { payload } = action;
  const { isCartOpen } = state;

  switch (action.type) {
    case ACTION_TYPES.TOGGLE_CART:
      return { ...state, isCartOpen: !isCartOpen };
    case ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error("Unknown action type in cart reducer");
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const toggleCart = () => dispatch({ type: ACTION_TYPES.TOGGLE_CART });

  const updateCartItems = cartItems => {
    let cartCount = 0;
    let cartTotal = 0;

    if (cartItems.length) {
      cartCount = cartItems.reduce((total, cartItem) => (total += cartItem.quantity), 0);
      cartTotal = cartItems.reduce(
        (total, cartItem) => (total += cartItem.quantity * cartItem.price),
        0
      );
    }

    dispatch({ type: ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems, cartCount, cartTotal } });
  };

  const addItemToCart = product => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = product => {
    const newCartItems = removeCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const clearCart = product => {
    const newCartItems = clearCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const value = {
    isCartOpen,
    toggleCart,
    cartItems,
    cartCount,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
