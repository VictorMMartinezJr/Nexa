const QuickLink = ({ img, subText, mainText, altText }) => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center md:h-[50vh]">
      <img
        src={img}
        alt={altText}
        className="w-full h-full object-cover object-center brightness-50 2xl:object-top"
      />

      {/* Text */}
      <div className="absolute flex flex-col justify-center items-start gap-4 left-0 -translate-x-0 bottom-0 -translate-y-0 pl-6 pb-6 text-white z-10">
        <p>{subText}</p>
        <p className="text-3xl">{mainText}</p>
        <button className="bg-white text-black px-4 py-1.5 rounded-2xl cursor-pointer lg:px-6">
          Shop
        </button>
      </div>
    </div>
  );
};

export default QuickLink;
