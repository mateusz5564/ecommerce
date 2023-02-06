import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = ({ product }) => {
  return (
    <CartItemContainer>
      <img src={product.imageUrl} alt={product.name} />
      <ItemDetails>
        <Name>{product.name}</Name>
        <span>
          {product.quantity} x ${product.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
