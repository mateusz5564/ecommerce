import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useCartContext();

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length < 1 ? (
          <EmptyMessage className="empty-message">Your cart is empty</EmptyMessage>
        ) : (
          cartItems.map(item => <CartItem key={item.id} product={item} />)
        )}
      </CartItems>
      <Button onClick={() => navigate("checkout")}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
