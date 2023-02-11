import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const { isCartOpen } = state;

  switch (action.type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return { ...state, isCartOpen: !isCartOpen };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
