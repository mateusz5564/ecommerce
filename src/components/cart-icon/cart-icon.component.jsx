import { useCartContext } from "../../context/cart.context";
import "./cart-icon.styles.jsx";
import { CartIconContainer, ItemCount, StyledIcon } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { cartCount, toggleCart } = useCartContext();

  return (
    <CartIconContainer onClick={() => toggleCart()}>
      <StyledIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
