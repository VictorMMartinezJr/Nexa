import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const SubNavList = ({
  state,
  title,
  resetMobileStates,
  setIsMobileNavActive,
}) => {
  const { setAudience, setCategory } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col gap-8 mt-8 text-gray-500 cursor-pointer transform transition-all duration-300 ease-in-out ${
        state ? "block pointer-events-auto" : "hidden pointer-events-none"
      }`}
    >
      <p className="text-black">{title}</p>
      <li
        className=" flex justify-between items-center pl-4 text-xl"
        onClick={() => {
          setAudience(title.toLowerCase());
          setCategory("Clothing");
          resetMobileStates();
          setIsMobileNavActive(false);
          navigate("/products");
        }}
      >
        <p>Clothing</p>
      </li>
      <li
        className="flex justify-between items-center pl-4 text-xl"
        onClick={() => {
          setAudience(title.toLowerCase().slice(0, -1));
          setCategory("Shoes");
          resetMobileStates();
          setIsMobileNavActive(false);
          navigate("/products");
        }}
      >
        <p>Shoes</p>
      </li>
      <li
        className="flex justify-between items-center pl-4 text-xl"
        onClick={() => {
          setAudience(title.toLowerCase());
          setCategory("Accessories");
          resetMobileStates();
          setIsMobileNavActive(false);
          navigate("/products");
        }}
      >
        <p>Accessories</p>
      </li>
    </div>
  );
};

export default SubNavList;
