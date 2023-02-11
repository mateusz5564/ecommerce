import { CART_ACTION_TYPES } from "./cart.types";

const updateCartItems = cartItems => ({
  type: CART_ACTION_TYPES.SET_CART_ITEMS,
  payload: { cartItems },
});

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

export const toggleCart = () => ({ type: CART_ACTION_TYPES.TOGGLE_CART });

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return updateCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return updateCartItems(newCartItems);
};

export const clearCart = (cartItems, product) => {
  const newCartItems = clearCartItem(cartItems, product);
  return updateCartItems(newCartItems);
};
