import { useDispatch, useSelector } from "react-redux";
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  QuantityButton,
} from "./checkout-item.styles.jsx";
import { addItemToCart, removeItemFromCart, clearCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, quantity, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, product));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, product));
  const clearItemHandler = () => dispatch(clearCart(cartItems, product));

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
