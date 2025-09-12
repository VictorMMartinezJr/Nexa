import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FilterSlider = () => {
  return (
    <>
      <div className="w-full bg-white flex justify-center items-center py-8 px-4 lg:hidden">
        <Swiper
          slidesPerView="auto"
          breakpoints={{
            768: {},
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide style={{ width: "auto" }}>
            <button className="cursor-pointer md:text-lg md:px-8">
              T-shirts
            </button>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide style={{ width: "auto" }}>
            <button className="cursor-pointer px-4 md:text-lg md:px-8">
              Hoodies
            </button>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <button className="cursor-pointer px-4 md:text-lg md:px-8">
              Pants
            </button>
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide style={{ width: "auto" }}>
            <button className="cursor-pointer px-4 md:text-lg md:px-8">
              Shorts
            </button>
          </SwiperSlide>
          <SwiperSlide style={{ width: "auto" }}>
            <button className="cursor-pointer md:text-lg md:px-8">
              Accessories
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FilterSlider;
