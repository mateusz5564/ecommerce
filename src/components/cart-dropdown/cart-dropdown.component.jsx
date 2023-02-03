import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useCartContext();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length < 1 && <p className="empty-message">Your cart is empty</p>}
        {cartItems.map(item => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <Button onClick={() => navigate("checkout")}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
