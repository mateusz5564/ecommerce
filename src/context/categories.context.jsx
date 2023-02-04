import { createContext, useState, useContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../firebase/firebase";

const CategoriesContext = createContext({});

export const useCategoriesContext = () => useContext(CategoriesContext);

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>{children}</CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
