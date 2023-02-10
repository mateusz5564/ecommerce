import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { categoriesMapSelector } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesMapSelector);

  return (
    <>
      {Object.keys(categoriesMap).map(title => (
        <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
      ))}
    </>
  );
};

export default CategoriesPreview;
