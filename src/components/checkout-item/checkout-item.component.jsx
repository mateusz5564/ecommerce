import { useCartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, quantity, price } = product;
  const { removeItemFromCart, addItemToCart, clearCart } = useCartContext();

  const removeItemHandler = () => removeItemFromCart(product);
  const addItemHandler = () => addItemToCart(product);
  const clearItemHandler = () => clearCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button className="action-button" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="action-button" onClick={addItemHandler}>
          &#10095;
        </button>
      </div>
      <span className="price">{price * quantity}</span>
      <button className="action-button" onClick={clearItemHandler}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
