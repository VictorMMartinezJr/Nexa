import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import shopBasketball from "../../assets/shop-basketball.jpg";
import shopRunning from "../../assets/shop-running.jpg";
import shopAccessories from "../../assets/shop-accessories.jpg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Slider = () => {
  const { setAudience, setCategory, setSortOption } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      {/* Mobile & Tablet Slider */}
      <div className="w-full h-[60vh] bg-white px-4 py-8 lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          modules={[Navigation]}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <button
              className="flex flex-col justify-center items-start cursor-pointer"
              onClick={() => {
                setCategory("Basketball");
                navigate("/products");
              }}
            >
              <img
                src={shopBasketball}
                alt="Shop basketball"
                className="w-full h-[45vh] object-cover"
              />
              <p className="text-black py-2">Shop Basketball</p>
            </button>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <button
              className="flex flex-col justify-center items-start cursor-pointer"
              onClick={() => {
                setCategory("Running");
                navigate("/products");
              }}
            >
              <img
                src={shopRunning}
                alt="Shop running"
                className="w-full h-[45vh] object-cover"
              />
              <p className="text-black py-2">Shop Running</p>
            </button>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="flex flex-col justify-center items-start cursor-pointer"
              onClick={() => {
                setCategory("Accessories");
                navigate("/products");
              }}
            >
              <img
                src={shopAccessories}
                alt="Shop accessories"
                className="w-full h-[45vh] object-cover rounded-lg"
              />
              <p className="text-black py-2">Shop Accessories</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Desktop Images */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:w-full lg:h-[80vh] lg:bg-white lg:px-4 lg:py-8 lg:gap-2">
        {/* Image 1 */}
        <button
          className="relative cursor-pointer whitespace-nowrap"
          onClick={() => {
            setCategory("Basketball");
            setAudience(null);
            setSortOption(null);
            navigate("/products");
          }}
        >
          <img
            src={shopBasketball}
            alt="Shop basketball"
            className="w-full h-full object-cover"
          />
          <p className="absolute text-black bg-white py-2 px-6 rounded-2xl cursor-pointer bottom-4 -translate-y-4 left-1/2 -translate-x-1/2">
            Shop Basketball
          </p>
        </button>
        {/* Image 2 */}
        <button
          className="relative flex-1/3 cursor-pointer whitespace-nowrap"
          onClick={() => {
            setCategory("Running");
            setAudience(null);
            setSortOption(null);
            navigate("/products");
          }}
        >
          <img
            src={shopRunning}
            alt="Shop running"
            className="w-full h-full object-cover"
          />
          <p className="absolute text-black bg-white py-2 px-6 rounded-2xl cursor-pointer bottom-4 -translate-y-4 left-1/2 -translate-x-1/2">
            Shop Running
          </p>
        </button>
        {/* Image 3 */}
        <button
          className="relative cursor-pointer whitespace-nowrap"
          onClick={() => {
            setCategory("Accessories");
            setAudience(null);
            setSortOption(null);
            navigate("/products");
          }}
        >
          <img
            src={shopAccessories}
            alt="Shop accessories"
            className="w-full h-full object-cover"
          />
          <p className="absolute text-black bg-white py-2 px-6 rounded-2xl cursor-pointer bottom-4 -translate-y-4 left-1/2 -translate-x-1/2">
            Shop Accessories
          </p>
        </button>
      </div>
    </>
  );
};

export default Slider;
