import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const DesktopHiddenNav = ({ title, state, resetStates }) => {
  const { setAudience, setCategory } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <ul
      className={`hidden md:absolute md:top-[8vh] md:left-0 md:w-[100%] md:h-[25vh] md:flex md:justify-center md:items-center md:bg-white md:text-gray-500 md:cursoer-pointer md:text-xl ${
        state
          ? "md:flex md:pointer-events-auto"
          : "md:hidden md:pointer-events-none"
      }`}
    >
      <div
        className="w-1/4 flex flex-col justify-center items-center gap-8"
        onMouseLeave={() => resetStates()}
      >
        <p className="font-bold text-black">{title}</p>
        <li
          className="cursor-pointer"
          onClick={() => {
            setAudience(title.toLowerCase());
            setCategory("Clothing");
            navigate("/products");
          }}
        >
          Clothing
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setAudience(title.toLowerCase().slice(0, -1));
            setCategory("Shoes");
            navigate("/products");
          }}
        >
          Shoes
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            setAudience(title.toLowerCase());
            setCategory("Accessories");
            navigate("/products");
          }}
        >
          Accessories
        </li>
      </div>
    </ul>
  );
};

export default DesktopHiddenNav;
