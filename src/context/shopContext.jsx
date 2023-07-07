import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const products = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  return (
    <ShopContext.Provider value={[products, loading]}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
