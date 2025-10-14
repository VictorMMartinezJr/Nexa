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
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isApparelActive, setIsApparelActive] = useState(true);
  const [isShoesActive, setIsShoesActive] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState({ items: [], total: 0 });

  axios.defaults.withCredentials = true;

  const fetchProducts = async (
    url,
    sortOption,
    audience,
    category,
    selectedSizes
  ) => {
    try {
      const response = await axios.get(url, {
        params: {
          sort: sortOption,
          audience: audience,
          category: category,
          selectedSizes: selectedSizes,
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

  const getUserCart = async () => {
    axios.defaults.withCredentials = true;

    try {
      const response = await axios.get("http://localhost:8080/api/cart");

      if (response.status === 200) {
        const cartData = response.data;

        setCart({ items: cartData.items, total: cartData.totalCartPrice });
      }
    } catch (error) {
      toast.error("Unable to fetch cart.");
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
    isApparelActive,
    setIsApparelActive,
    isShoesActive,
    setIsShoesActive,
    sortOption,
    setSortOption,
    category,
    setCategory,
    audience,
    setAudience,
    fetchProducts,
    selectedSizes,
    setSelectedSizes,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserAccount,
    cart,
    getUserCart,
    getAuthStatus,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
