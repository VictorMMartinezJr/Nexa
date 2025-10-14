import { useContext } from "react";
import basketball from "../../assets/basketball.mp4";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { setCategory, setAudience } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setAudience(null);
    setCategory("Basketball");
    navigate("/products");
  };

  return (
    <div className="w-full h-[92vh]">
      <div className="relative w-full h-full">
        {/* Video */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Video showing a basketball going into a hoop"
        >
          <source src={hero} type="video/mp4" />
        </video>

        {/* Overlay text */}
        <div className="flex flex-col justify-center items-center gap-4 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-white text-center w-full">
          <p className="font-bold text-4xl tracking-tighter md:text-5xl xl:text-9xl">
            SHOOT FOR GREATNESS
          </p>
          <p className="md:text-xl">Shop Basketball</p>
          <button
            className="bg-white text-black px-4 py-1.5 rounded-2xl cursor-pointer lg:px-6"
            onClick={handleClick}
          >
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
