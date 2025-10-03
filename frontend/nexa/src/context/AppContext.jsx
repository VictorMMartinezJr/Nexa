import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [audience, setAudience] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  axios.defaults.withCredentials = true;

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

  const getUserAccount = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/account");

      if (response.status === 200) {
        setUserData(response.data);
        setIsLoggedIn(true);
      } else {
        toast.error("Unable to retrieve account.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const getAuthStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/is-authenticated"
      );

      if (response.status === 200 && response.data == true) {
        setIsLoggedIn(true);
        await getUserAccount();
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log("Auth check failed: ", error.message);

      // Only show error toast if something went wrong
      if (!error.response && error.response.status >= 500) {
        toast.error("Somthing went went. Please try again.");
      }

      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    getAuthStatus();
  }, []);

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
    getUserAccount,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
