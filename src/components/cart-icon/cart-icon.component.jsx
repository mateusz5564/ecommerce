import { useDispatch, useSelector } from "react-redux";
import "./cart-icon.styles.jsx";
import { CartIconContainer, ItemCount, StyledIcon } from "./cart-icon.styles.jsx";
import { toggleCart } from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount  = useSelector(selectCartCount);

  const toggleCartDropdown = () => dispatch(toggleCart());

  return (
    <CartIconContainer onClick={() => toggleCartDropdown()}>
      <StyledIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
