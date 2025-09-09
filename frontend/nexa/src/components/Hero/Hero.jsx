import soccer from "../../assets/soccer.mp4";
const Hero = () => {
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
        >
          <source src={soccer} type="video/mp4" />
        </video>

        {/* Overlay text */}
        <div className="flex flex-col justify-center items-center gap-4 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-white text-center w-full">
          <p className="font-bold text-4xl tracking-tighter md:text-5xl xl:text-9xl">
            CHASE THE GOAL
          </p>
          <p className="md:text-lg">Shop 2026 World Cup Collection</p>
          <button className="bg-white text-black px-2.5 py-1 rounded-2xl cursor-pointer sm:px-4 lg:px-6">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
