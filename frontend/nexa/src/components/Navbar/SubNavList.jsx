import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const SubNavList = ({
  state,
  title,
  resetMobileStates,
  setIsMobileNavActive,
}) => {
  const { setAudience, setCategory, resetFilters } = useContext(AppContext);
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
          setCategory("Apparel");
          resetMobileStates();
          setIsMobileNavActive(false);
          resetFilters();
          navigate("/products");
        }}
      >
        <p>Apparel</p>
      </li>
      <li
        className="flex justify-between items-center pl-4 text-xl"
        onClick={() => {
          setAudience(title.toLowerCase());
          setCategory("Shoes");
          resetMobileStates();
          setIsMobileNavActive(false);
          resetFilters();
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
          resetFilters();
          navigate("/products");
        }}
      >
        <p>Accessories</p>
      </li>
    </div>
  );
};

export default SubNavList;
