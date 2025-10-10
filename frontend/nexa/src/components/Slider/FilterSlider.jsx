import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const FilterSlider = () => {
  const { fetchProducts, sortOption, audience, category, setCategory } =
    useContext(AppContext);

  const handleClick = (selectedCat) => {
    setCategory(selectedCat);

    fetchProducts(
      "http://localhost:8080/api/products",
      sortOption,
      audience,
      category
    );
  };
  return (
    <>
      <div className="w-full bg-white flex justify-center items-center py-8 px-4 lg:hidden">
        <Swiper slidesPerView="auto">
          {[
            "T-Shirts",
            "Hoodies",
            "Pants",
            "Shorts",
            "Accessories",
            "Shoes",
          ].map((category) => (
            <SwiperSlide key={category} style={{ width: "auto" }}>
              <button
                className="cursor-pointer pr-4 md:text-lg md:pl-8"
                onClick={() => handleClick(category)}
              >
                {category}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FilterSlider;
