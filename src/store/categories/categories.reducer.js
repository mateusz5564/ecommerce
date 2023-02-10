const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { categories: action.payload };
    default:
      return state;
  }
};
