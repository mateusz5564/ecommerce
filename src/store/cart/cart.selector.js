import { createSelector } from "reselect";

export const selectIsCartOpen = state => state.cart.isCartOpen;

export const selectCartItems = state => state.cart.cartItems;

export const selectCartCount = createSelector(selectCartItems, cartItems => {
  const cartCount = cartItems.reduce((total, cartItem) => (total += cartItem.quantity), 0);

  return cartCount;
});

export const selectCartTotal = createSelector(selectCartItems, cartItems => {
  const cartTotal = cartItems.reduce(
    (total, cartItem) => (total += cartItem.quantity * cartItem.price),
    0
  );

  return cartTotal;
});
