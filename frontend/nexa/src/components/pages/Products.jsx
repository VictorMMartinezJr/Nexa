import ProductGrid from "../ProductGrid";
import FilterSlider from "../Slider/FilterSlider";
import { IoOptionsOutline } from "react-icons/io5";

const Products = () => {
  return (
    <div className="lg:px-4 2xl:px-8">
      <h2 className="pt-8 px-4 lg:px-0">Mens Clothing</h2>
      {/* Category slider */}
      <FilterSlider />
      {/* Result # and filter button */}
      <div className="w-full flex justify-between items-center py-4 px-4 lg:px-0">
        <p>100 Results</p>
        <button className="flex justify-center items-center gap-2 px-6 py-1.5 border-1 rounded-full cursor-pointer lg:px-6">
          Filter
          <IoOptionsOutline className="text-xl" />
        </button>
      </div>
      {/* Products grid */}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Products;
