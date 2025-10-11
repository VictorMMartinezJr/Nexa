import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [shoesActive, setShoesActive] = useState(true);
  const [selectedApparelSize, setSelectedApparelSize] = useState("");
  const [selectedShoeSize, setSelectedShoeSize] = useState(-1);
  const navigate = useNavigate();

  const { isLoggedIn, getUserCart } = useContext(AppContext);

  const shoeSizes = [6, 7, 8, 9, 10, 11, 12];
  const apparelSizes = ["S", "M", "L", "XL", "XXL"];

  const addToCart = async (productId, quantity) => {
    axios.defaults.withCredentials = true;

    // user must be logged in to add items to cart
    if (!isLoggedIn) {
      navigate("/login");
      toast.info("Please login to add items to your cart.");
      return;
    }

    // Size must be selected
    const size = shoesActive ? selectedShoeSize : selectedApparelSize;
    if (!size || size === -1) {
      toast.error("Please select a size.");
      return;
    }

    // Add item to cart
    try {
      const response = await axios.post("http://localhost:8080/api/cart/add", {
        productId,
        quantity,
      });

      if (response.status === 200) {
        toast.success("Item added to cart.");
        await getUserCart();
        navigate("/cart");
      }
    } catch (error) {
      toast.error("Unable to add item to cart. Please try again.");
      console.log("Add to cart error: ", error.message);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/product/${id}`
      );
      const data = response.data;
      setProduct(data);
      console.log(data);

      if (data.category.toLowerCase().includes("shoe")) {
        setShoesActive(true);
      } else {
        setShoesActive(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {/* Mobile */}
      <div className="flex flex-col justify-between items-center min-h-screen md:hidden">
        <div className="flex-1 overflow-y-auto pb-8">
          {/* Item text */}
          <div className="flex flex-col justify-center w-full flex-1 p-8">
            <h1 className="text-xl">{product?.name}</h1>
            <h2 className="text-gray-500 text-lg">{product?.category}</h2>
            <h3 className="pt-2 text-xl">${product?.price}</h3>
          </div>

          {/* Item image */}
          <div className="flex-1">
            <img
              src={
                product?.imageURL
                  ? product?.imageURL
                  : "https://placehold.co/600x900"
              }
              alt=""
            />
          </div>

          {/* Sizes */}
          <div className="flex flex-col w-full px-4 my-8">
            <p className="text-xl">Select Size</p>
            <div className="grid grid-cols-2 gap-2 w-full mt-4">
              {!shoesActive // apparel sizes
                ? apparelSizes.map((size) => (
                    <button
                      key={size}
                      className={`border-1 rounded-lg py-4 cursor-pointer ${
                        selectedApparelSize == size
                          ? "border-black"
                          : "border-gray-400"
                      } ${
                        !product[`has${size}`] ? "text-gray-500" : "text-black"
                      }`}
                      onClick={() => setSelectedApparelSize(size)}
                      disabled={!product[`has${size}`]}
                    >
                      {size}
                    </button>
                  ))
                : // shoe sizes
                  shoeSizes.map((size) => (
                    <button
                      key={size}
                      className={`border-1 rounded-lg py-4 cursor-pointer ${
                        selectedShoeSize == size
                          ? "border-black"
                          : "border-gray-400"
                      } ${
                        !product?.[`has${size}`]
                          ? "text-gray-500"
                          : "text-black"
                      }`}
                      onClick={() => setSelectedShoeSize(size)}
                      disabled={!product?.[`has${size}`]}
                    >
                      {size}
                    </button>
                  ))}
            </div>
          </div>

          {/* Item description */}
          <div className="flex flex-col w-full px-4">
            <p className="text-xl">Item Description</p>
            <p className="mt-4">{product?.description}</p>
          </div>
        </div>

        {/* Add to Bag button */}
        <button
          onClick={() => addToCart(product.id, 1)}
          className="cursor-pointer sticky bottom-0 bg-black text-white w-full py-6 text-xl text-center"
        >
          Add to Cart
        </button>
      </div>

      {/* Desktop */}
      <div className="w-full flex justify-center items-center">
        <div className="hidden md:flex justify-between items-start min-h-auto mt-8 p-8 xl:w-[70%] 2xl:w-[50%]">
          {/* Item image */}
          <div className="flex-1">
            <img
              src={
                product?.imageURL
                  ? product?.imageURL
                  : "https://placehold.co/400x400"
              }
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-center flex-1 px-4">
            {/* Item text */}
            <div className="flex flex-col justify-center w-full">
              <h1 className="text-xl">{product?.name}</h1>
              <h2 className="text-gray-500 text-lg">{product?.category}</h2>
              <h3 className="pt-2 text-xl">$ {product?.price}</h3>
            </div>

            {/* Sizes */}
            {/* Sizes */}
            <div className="flex flex-col w-full px-4 my-8">
              <p className="text-xl">Select Size</p>
              <div className="grid grid-cols-2 gap-2 w-full mt-4">
                {!shoesActive // apparel sizes
                  ? apparelSizes.map((size) => (
                      <button
                        key={size}
                        className={`border-1 rounded-lg py-4 cursor-pointer ${
                          selectedApparelSize == size
                            ? "border-black"
                            : "border-gray-400"
                        } ${
                          !product[`has${size}`]
                            ? "text-gray-500"
                            : "text-black"
                        }`}
                        onClick={() => setSelectedApparelSize(size)}
                        disabled={!product[`has${size}`]}
                      >
                        {size}
                      </button>
                    ))
                  : // shoe sizes
                    shoeSizes.map((size) => (
                      <button
                        key={size}
                        className={`border-1 rounded-lg py-4 cursor-pointer ${
                          selectedShoeSize == size
                            ? "border-black"
                            : "border-gray-400"
                        } ${
                          !product?.[`has${size}`]
                            ? "text-gray-500"
                            : "text-black"
                        }`}
                        onClick={() => setSelectedShoeSize(size)}
                        disabled={!product?.[`has${size}`]}
                      >
                        {size}
                      </button>
                    ))}
              </div>
            </div>

            {/* Item description */}
            <div className="flex flex-col w-full">
              <p className="text-xl">Item Description</p>
              <p className="mt-4 lg:text-lg">{product?.description}</p>
            </div>

            <button
              type="submit"
              onClick={() => addToCart(product.id, 1)}
              className="cursor-pointer my-12 bottom-0 bg-black text-white w-full py-6 text-xl text-center rounded-full 2xl:my-14"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
