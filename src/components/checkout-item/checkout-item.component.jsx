import { useCartContext } from "../../context/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  QuantityButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, quantity, price } = product;
  const { removeItemFromCart, addItemToCart, clearCart } = useCartContext();

  const removeItemHandler = () => removeItemFromCart(product);
  const addItemHandler = () => addItemToCart(product);
  const clearItemHandler = () => clearCart(product);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <QuantityButton onClick={removeItemHandler}>&#10094;</QuantityButton>
        <span>{quantity}</span>
        <QuantityButton onClick={addItemHandler}>&#10095;</QuantityButton>
      </Quantity>
      <Price>{price * quantity}</Price>
      <QuantityButton onClick={clearItemHandler}>&#10005;</QuantityButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
