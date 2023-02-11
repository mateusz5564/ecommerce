import { getCategoriesAndDocuments } from "../../firebase/firebase";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const fetchCategories = () => async dispatch => {
  dispatch({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START });
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categories });
  } catch (err) {
    dispatch({ type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, payload: err });
  }
};
