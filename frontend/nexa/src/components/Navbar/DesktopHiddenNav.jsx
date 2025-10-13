import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { s } from "framer-motion/client";

const DesktopHiddenNav = ({ title, state, resetStates }) => {
  const { setAudience, setCategory } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <ul
      className={`hidden md:absolute md:top-[8vh] md:left-0 md:w-[100%] md:h-auto md:flex md:justify-center md:items-center md:bg-white md:text-gray-500 md:cursoer-pointer md:text-xl ${
        state
          ? "md:flex md:pointer-events-auto"
          : "md:hidden md:pointer-events-none"
      }`}
    >
      <div
        className="w-1/4 flex flex-col justify-center items-center gap-8"
        onMouseLeave={() => resetStates()}
      >
        <div className="flex justtify-center gap-20">
          <ul
            className="flex flex-col"
            onClick={(e) => {
              setCategory(e.target.textContent);

              resetStates();
              setAudience(title.toLowerCase());
              navigate("/products");
            }}
          >
            <li className="cursor-pointer text-black py-1">Apparel</li>
            <li className="cursor-pointer  py-1">T-Shirts</li>
            <li className="cursor-pointer  py-1">Hoodies</li>
            <li className="cursor-pointer  py-1">Pants</li>
            <li className="cursor-pointer  py-1">Shorts</li>
          </ul>
          <ul
            className="flex flex-col"
            onClick={(e) => {
              if (e.target.textContent === "Shoes") {
                setCategory(e.target.textContent);
              } else {
                setCategory(e.target.textContent + " Shoes");
              }

              resetStates();
              setAudience(title.toLowerCase());
              navigate("/products");
            }}
          >
            <li className="cursor-pointer text-black py-1">Shoes</li>
            <li className="cursor-pointer py-1">Running</li>
            <li className="cursor-pointer py-1">Basketball</li>
            <li className="cursor-pointer py-1">Lifestyle</li>
          </ul>

          <ul
            className="flex flex-col"
            onClick={(e) => {
              setCategory(e.target.textContent);
              resetStates();
              setAudience(title.toLowerCase());
              navigate("/products");
            }}
          >
            <li className="cursor-pointer text-black py-1">Accessories</li>
            <li className="cursor-pointer py-1">Headgear</li>
            <li className="cursor-pointer py-1">Socks</li>
            <li className="cursor-pointer py-1">Bags</li>
          </ul>
        </div>
      </div>
    </ul>
  );
};

export default DesktopHiddenNav;
