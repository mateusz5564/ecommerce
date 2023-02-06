import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={`${title}`}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </Title>
      <Preview>
        {products.slice(0, 4).map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
