import { useCartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import { Footer, ProductCardContainer } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useCartContext();

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span>{name}</span>
        <span>{price}</span>
      </Footer>
      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
