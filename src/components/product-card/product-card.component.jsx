import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button.component";
import { Footer, ProductCardContainer } from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(addItemToCart(cartItems, product));
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
