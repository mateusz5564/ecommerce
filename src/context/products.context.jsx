import { createContext, useState, useContext } from "react";
import PRODUCTS from "../shop-data.json";

const ProductsContext = createContext([]);

export const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
