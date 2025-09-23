import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [shoesActive, setShoesActive] = useState(true);
  const [selectedApparelSize, setSelectedApparelSize] = useState("");
  const [selectedShoeSize, setSelectedShoeSize] = useState(-1);

  const shoeSizes = [6, 7, 8, 9, 10, 11, 12];
  const apparelSizes = ["S", "M", "L", "XL", "XXL"];

  const addToBag = () => {};

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/product/${id}`
      );
      const data = response.data;
      setProduct(data);

      console.log(data);
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
            <img src="https://placehold.co/600x900" alt="" />
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
                      } `}
                      onClick={() => setSelectedApparelSize(size)}
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
                      } `}
                      onClick={() => setSelectedShoeSize(size)}
                    >
                      {size}
                    </button>
                  ))}
            </div>
          </div>

          {/* Item description */}
          <div className="flex flex-col w-full px-4">
            <p className="text-xl">Item Description</p>
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto quae eum, alias quam doloribus placeat nulla labore vel
              consequuntur possimus cupiditate, sequi ut autem. Ut id ipsam sit
              voluptatum iste?
            </p>
          </div>
        </div>

        {/* Add to Bag button */}
        <button
          onClick={addToBag}
          className="cursor-pointer sticky bottom-0 bg-black text-white w-full py-6 text-xl text-center"
        >
          Add to Bag
        </button>
      </div>

      {/* Desktop */}
      <div className="w-full flex justify-center items-center">
        <div className="hidden md:flex justify-between items-start min-h-auto mt-8 p-8 xl:w-[70%] 2xl:w-[50%]">
          {/* Item image */}
          <div className="flex-1">
            <img src="https://placehold.co/400x400" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center flex-1 px-4">
            {/* Item text */}
            <div className="flex flex-col justify-center w-full">
              <h1 className="text-xl">Giannis Freak 7 "Spotlight"</h1>
              <h2 className="text-gray-500 text-lg">Basketball Shoes</h2>
              <h3 className="pt-2 text-xl">$115</h3>
            </div>

            {/* Sizes */}
            <div className="flex flex-col w-full my-12 2xl:my-14">
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
                        } `}
                        onClick={() => setSelectedApparelSize(size)}
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
                        } `}
                        onClick={() => setSelectedShoeSize(size)}
                      >
                        {size}
                      </button>
                    ))}
              </div>
            </div>

            {/* Item description */}
            <div className="flex flex-col w-full">
              <p className="text-xl">Item Description</p>
              <p className="mt-4 lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto quae eum, alias quam doloribus placeat nulla labore
                vel consequuntur possimus cupiditate, sequi ut autem. Ut id
                ipsam sit voluptatum iste?
              </p>
            </div>

            <button
              onClick={addToBag}
              className="cursor-pointer my-12 bottom-0 bg-black text-white w-full py-6 text-xl text-center rounded-full 2xl:my-14"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
