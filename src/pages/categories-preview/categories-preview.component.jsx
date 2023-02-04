import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useCategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useCategoriesContext();

  return (
    <>
      {Object.keys(categoriesMap).map(title => (
        <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
      ))}
    </>
  );
};

export default CategoriesPreview;
