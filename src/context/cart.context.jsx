import { createContext, useEffect, useContext, useState } from "react";

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

const addCartItem = (cartItems, productToAdd) => {
  const itemIndex = cartItems.findIndex(item => item.id === productToAdd.id);
  const cartItemsCopy = [...cartItems];

  if (itemIndex >= 0) {
    cartItemsCopy[itemIndex] = { ...productToAdd, quantity: cartItemsCopy[itemIndex].quantity + 1 };
  } else {
    cartItemsCopy.push({ ...productToAdd, quantity: 1 });
  }

  return cartItemsCopy;
};

const removeCartItem = (cartItems, productToRemove) => {
  const itemIndex = cartItems.findIndex(item => item.id === productToRemove.id);
  const cartItemsCopy = [...cartItems];

  if (cartItemsCopy[itemIndex].quantity > 1) {
    cartItemsCopy[itemIndex] = {
      ...productToRemove,
      quantity: cartItemsCopy[itemIndex].quantity - 1,
    };
    return cartItemsCopy;
  }

  if (itemIndex === 0) {
    return cartItems.filter(item => item.id !== productToRemove.id);
  }
};

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter(item => item.id !== productToRemove.id);
};

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = productToRemove =>
    setCartItems(removeCartItem(cartItems, productToRemove));

  const clearCart = productToRemove => setCartItems(clearCartItem(cartItems, productToRemove));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    cartTotal,
  };

  useEffect(() => {
    setCartCount(cartItems.reduce((total, cartItem) => (total += cartItem.quantity), 0));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce((total, cartItem) => (total += cartItem.quantity * cartItem.price), 0)
    );
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
