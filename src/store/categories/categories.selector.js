import { createSelector } from "reselect";

const selectCategories = state => state.categories.categories;

export const categoriesMapSelector = createSelector(selectCategories, categories =>
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
