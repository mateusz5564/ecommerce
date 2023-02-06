import { useParams } from "react-router-dom";
import { useCategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();

  const products = categoriesMap[category];

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map(item => <ProductCard key={item.id} product={item} />)}
      </CategoryContainer>
    </>
  );
};

export default Category;
