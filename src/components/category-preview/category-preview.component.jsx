import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <Link to={`${title}`}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
