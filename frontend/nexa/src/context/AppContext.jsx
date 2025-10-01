import axios from "axios";
import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [audience, setAudience] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchProducts = async (url, sortOption, audience, category) => {
    try {
      const response = await axios.get(url, {
        params: {
          sort: sortOption,
          audience: audience,
          category: category,
        },
      });
      setProducts(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const contextValue = {
    products,
    setProducts,
    searchedProducts,
    setSearchedProducts,
    sortOption,
    setSortOption,
    category,
    setCategory,
    audience,
    setAudience,
    fetchProducts,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
