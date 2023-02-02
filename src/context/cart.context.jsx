import { createContext, useContext, useState } from "react";

const CartContext = new createContext({ isOpen: false, setIsOpen: () => null });

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
