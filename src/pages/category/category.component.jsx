import { useParams } from "react-router-dom";
import { useCategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoriesContext();

  const products = categoriesMap[category];

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products && products.map(item => <ProductCard key={item.id} product={item} />)}
      </div>
    </>
  );
};

export default Category;
