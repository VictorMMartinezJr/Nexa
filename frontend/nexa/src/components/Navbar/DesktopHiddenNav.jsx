const DesktopHiddenNav = ({ category, state }) => {
  return (
    <ul
      className={`hidden md:flex-col md:justify-center md:items-center md:gap-8 md:absolute md:top-[8vh] md:left-0 md:w-[100%] md:h-[25vh] md:bg-white md:text-gray-500 md:cursoer-pointer md:text-xl ${
        state
          ? "md:flex md:pointer-events-auto"
          : "md:hidden md:pointer-events-none"
      }`}
    >
      <p className="font-bold text-black text-2xl">{category}</p>
      <li>Clothing</li>
      <li>Shoes</li>
      <li>Accessories</li>
    </ul>
  );
};

export default DesktopHiddenNav;
