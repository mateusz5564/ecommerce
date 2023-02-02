import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted">Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
