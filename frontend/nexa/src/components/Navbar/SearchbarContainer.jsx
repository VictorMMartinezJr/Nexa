import { FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import ProductGrid from "../ProductGrid";

const SearchbarContainer = ({ state, setState }) => {
  const [searchInput, setSearchInput] = useState("");
  const { searchedProducts, setSearchedProducts } = useContext(AppContext);

  const handleChange = async (value) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/search?keyword=${value}`
      );
      const data = response.data;
      setSearchedProducts(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleCancel = () => {
    setState(false);
    setSearchInput("");
    setSearchedProducts([]);
  };

  return (
    <div
      className={`z-20 fixed flex flex-col bg-white h-screen w-full p-4 top-0 right-0 overflow-hidden transform transition-transform duration-300 ease-in-out ${
        state ? "translate-x-0" : "translate-x-full"
      } lg:h-auto 2xl:px-8`}
    >
      <div className="flex items-center justify-between w-full text-lg">
        <div className="hidden lg:block lg:w-1/4">
          <img src={logo} className="lg:block lg:w-12 lg:h-12" />
        </div>

        {/* Search form */}
        <form className="relative flex justify-between items-center gap-4 w-full">
          {/* Search icon */}
          <div
            type="submit"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
          >
            <FiSearch />
          </div>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              handleChange(e.target.value);
            }}
            className="bg-gray-200 rounded-2xl px-8 py-1 w-[90%] lg:w-3/4"
          />
          {/* Cancel button */}
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>

      {/* Searched products */}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 my-8">
        {searchedProducts.map((product) => (
          <ProductGrid
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchbarContainer;
