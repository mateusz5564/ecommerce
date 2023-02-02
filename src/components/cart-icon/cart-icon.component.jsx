import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { useCartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartCount, setIsCartOpen } = useCartContext();

  return (
    <div className="cart-icon-container" onClick={() => setIsCartOpen(prevState => !prevState)}>
      <Icon className="icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
