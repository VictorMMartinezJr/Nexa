import { useContext, useEffect, useState } from "react";
import ProductGrid from "../ProductGrid";
import FilterSlider from "../Slider/FilterSlider";
import { IoOptionsOutline } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { AppContext } from "../../context/AppContext";

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);

  const {
    products,
    isApparelActive,
    setIsApparelActive,
    isShoesActive,
    setIsShoesActive,
    sortOption,
    setSortOption,
    category,
    audience,
    fetchProducts,
    selectedSizes,
    setSelectedSizes,
    resetFilters,
  } = useContext(AppContext);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;

    setSelectedSizes((prev) =>
      checked ? [...prev, value] : prev.filter((size) => size !== value)
    );
  };

  const handleSubmit = () => {
    setShowFilters(false);
  };

  useEffect(() => {
    fetchProducts(
      "http://localhost:8080/api/products",
      sortOption,
      audience,
      category,
      selectedSizes
    );

    if (category?.includes("Shoes")) {
      setIsShoesActive(true);
      setIsApparelActive(false);
    } else if (category === null) {
      setIsApparelActive(true);
      setIsShoesActive(true);
    } else {
      setIsApparelActive(true);
      setIsShoesActive(false);
    }
  }, [sortOption, audience, category, selectedSizes]);

  return (
    <div className="lg:px-4 2xl:px-8">
      <h2 className="pt-8 px-4 lg:px-0 lg:hidden">
        {audience
          ? audience[0].toUpperCase() + audience.slice(1, audience.length)
          : ""}{" "}
        {category ? category : "Products"}
      </h2>

      {/* Category slider */}
      <FilterSlider />

      {/* Result # and filter button */}
      <div className="w-full flex justify-between items-center py-4 px-4 lg:px-0">
        <p className="lg:hidden">{products.length} Results</p>
        <p className="hidden lg:block lg:text-2xl">
          {audience
            ? audience[0].toUpperCase() + audience.slice(1, audience.length)
            : ""}{" "}
          {category ? category : "Products"} ({products.length})
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4">
          {/* Filter button */}
          <button
            className="flex justify-center items-center gap-2 px-6 py-1.5 border-1 rounded-full cursor-pointer lg:px-6 lg:border-0"
            onClick={() => setShowFilters(!showFilters)}
          >
            <p className="hidden lg:block">{showFilters ? "Hide " : "Show "}</p>
            Filters
            <IoOptionsOutline className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Filters */}
      <div
        className={`fixed flex flex-col gap-8 w-full h-screen bg-white top-0 left-0 z-10 p-4 text-xl transform transition-transform duration-500 ease-in-out ${
          showFilters ? "translate-y-0" : "translate-y-full"
        } lg:hidden`}
      >
        <div className="flex justify-between">
          <p>Filters</p>
          <button
            onClick={() => {
              resetFilters();
              setShowFilters(false);
            }}
          >
            <RiCloseFill className="self-end text-3xl cursor-pointer" />
          </button>
        </div>

        {/* Sort Filters */}
        <fieldset className="flex flex-col gap-4">
          <legend className="py-4">Sort By</legend>

          <label>
            <input
              type="radio"
              name="sortMobile"
              value="lowToHigh"
              checked={sortOption === "lowToHigh"}
              onChange={handleSortChange}
              className="accent-black"
            />
            <span className="ml-2">Price: Low-High</span>
          </label>

          <label>
            <input
              type="radio"
              name="sortMobile"
              value="highToLow"
              checked={sortOption === "highToLow"}
              onChange={handleSortChange}
              className="accent-black"
            />
            <span className="ml-2">Price: High-Low</span>
          </label>
        </fieldset>

        {/* Size Filters */}
        <fieldset className="flex flex-col gap-4">
          <legend className="py-4">Size</legend>

          {/* Map sizes */}
          {isApparelActive && (
            <div className="flex justify-center gap-4">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label key={size}>
                  <input
                    type="checkbox"
                    value={size}
                    checked={selectedSizes.includes(size)}
                    onChange={handleSizeChange}
                    className="peer hidden"
                  />
                  <span className="px-4 py-1 rounded-md border-1 border-gray-200 peer-checked:border-black">
                    {size}
                  </span>
                </label>
              ))}
            </div>
          )}

          {isShoesActive && (
            <div className="flex justify-center gap-4 flex-wrap">
              {["6", "7", "8", "9", "10", "11", "12"].map((size) => (
                <label key={size}>
                  <input
                    type="checkbox"
                    value={size}
                    checked={selectedSizes.includes(size)}
                    onChange={handleSizeChange}
                    className="peer hidden"
                  />
                  <span className="px-4 py-1 rounded-md border-1 border-gray-200 peer-checked:border-black">
                    {size}
                  </span>
                </label>
              ))}
            </div>
          )}
        </fieldset>

        {/* Clear & apply buttpns */}
        <div className="flex justify-center gap-2 mt-4 text-md">
          <button
            className="border-2 border-gray-200 px-6 py-2 rounded-full cursor-pointer"
            onClick={resetFilters}
          >
            Clear Filters
          </button>
          <button
            className="bg-black text-white px-6 py-2 rounded-full cursor-pointer"
            onClick={handleSubmit}
          >
            Apply Filters
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        {/* Desktop Filters */}
        {showFilters && (
          <div
            className={`hidden lg:flex flex-col gap-8 w-[30vw] h-screen p-4 text-xl transform transition-transform duration-500 ease-in-out ${
              showFilters ? "-translate-x-0" : "-translate-x-full"
            } 2xl:w-[20vw]`}
          >
            <div className="flex justify-between">
              <p>Filters</p>
              <button onClick={() => setShowFilters(false)}>
                <RiCloseFill className="self-end text-3xl cursor-pointer" />
              </button>
            </div>

            {/* Sort Filters */}
            <fieldset className="flex flex-col gap-4">
              <legend className="py-4">Sort By</legend>

              <label>
                <input
                  type="radio"
                  name="sortDesktop"
                  value="lowToHigh"
                  checked={sortOption === "lowToHigh"}
                  className="accent-black"
                  onChange={handleSortChange}
                />
                <span className="ml-2">Price: Low-High</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="sortDesktop"
                  value="highToLow"
                  checked={sortOption === "highToLow"}
                  className="accent-black"
                  onChange={handleSortChange}
                />
                <span className="ml-2">Price: High-Low</span>
              </label>
            </fieldset>

            {/* Size Filters */}
            <fieldset className="flex flex-col gap-4">
              <legend className="py-4">Size</legend>

              {/* Map sizes */}
              {isApparelActive && (
                <div className="flex justify-center gap-4">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <label key={size}>
                      <input
                        type="checkbox"
                        value={size}
                        checked={selectedSizes.includes(size)}
                        onChange={handleSizeChange}
                        className="peer hidden"
                      />
                      <span className="px-4 py-1 rounded-md border-1 border-gray-200 peer-checked:border-black">
                        {size}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {isShoesActive && (
                <div className="flex justify-center gap-4 flex-wrap">
                  {["6", "7", "8", "9", "10", "11", "12"].map((size) => (
                    <label key={size}>
                      <input
                        type="checkbox"
                        value={size}
                        checked={selectedSizes.includes(size)}
                        onChange={handleSizeChange}
                        className="peer hidden"
                      />
                      <span className="px-4 py-1 rounded-md border-1 border-gray-200 peer-checked:border-black">
                        {size}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </fieldset>

            {/* Clear & apply buttpns */}
            <div className="flex justify-center gap-2 mt-4 text-md">
              <button
                className="border-2 border-gray-200 px-3 py-2 rounded-full cursor-pointer"
                onClick={resetFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {/* Products grid */}
        {products.length > 0 ? (
          <div className="flex-1 grid grid-cols-2 gap-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductGrid
                key={p.id}
                name={p.name}
                category={p.category}
                price={p.price}
                productId={p.id}
                imgURL={p.imageURL}
              />
            ))}
          </div>
        ) : (
          <div className="flex-1 grid grid-cols-2 gap-2 lg:grid-cols-3">
            <p className="text-lg">No Results Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
