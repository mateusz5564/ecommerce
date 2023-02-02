import { createContext, useEffect, useContext, useState } from "react";

const CartContext = new createContext({ isOpen: false, setIsOpen: () => null });

export const useCartContext = () => useContext(CartContext);

const addCartItem = (cartItems, product) => {
  const itemIndex = cartItems.findIndex(item => item.id === product.id);
  const cartItemsCopy = [...cartItems];

  if (itemIndex >= 0) {
    cartItemsCopy[itemIndex] = { ...product, quantity: cartItemsCopy[itemIndex].quantity + 1 };
  } else {
    cartItemsCopy.push({ ...product, quantity: 1 });
  }

  return cartItemsCopy;
};

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = product => {
    setCartItems(addCartItem(cartItems, product));
  };

  useEffect(() => {
    setCartCount(cartItems.reduce((total, cartItem) => (total += cartItem.quantity), 0));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartItems, cartCount, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
