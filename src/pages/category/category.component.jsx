import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";
import { useSelector } from "react-redux";
import { categoriesMapSelector } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categoriesMapSelector);

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
