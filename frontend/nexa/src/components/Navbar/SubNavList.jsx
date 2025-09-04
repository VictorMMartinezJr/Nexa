const SubNavList = ({ state, title }) => {
  return (
    <div
      className={`flex flex-col gap-8 mt-8 text-gray-500 cursoer-pointer transform transition-all duration-300 ease-in-out ${
        state ? "block pointer-events-auto" : "hidden pointer-events-none"
      }`}
    >
      <p className="text-black">{title}</p>
      <li className=" flex justify-between items-center pl-4 text-xl">
        <p>Clothing</p>
      </li>
      <li className="flex justify-between items-center pl-4 text-xl">
        <p>Shoes</p>
      </li>
      <li className="flex justify-between items-center pl-4 text-xl">
        <p>Accessories</p>
      </li>
    </div>
  );
};

export default SubNavList;
