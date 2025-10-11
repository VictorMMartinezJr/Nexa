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
        <div className="flex justtify-center border-2 gap-20">
          <ul
            className="flex flex-col"
            onClick={(e) => {
              switch (e.target.textContent) {
                case "T-Shirts":
                  setCategory("T-Shirt");
                  break;
                case "Hoodies":
                  setCategory("Hoodie");
                  break;
                case "Pants":
                  setCategory("Pant");
                  break;
                case "Shorts":
                  setCategory("Short");
                  break;
                default:
                  setCategory("Clothing");
              }

              resetStates();
              setAudience(title.toLowerCase());
              navigate("/products");
            }}
          >
            <li className="cursor-pointer text-black py-1">Clothing</li>
            <li className="cursor-pointer text-sm py-1">T-Shirts</li>
            <li className="cursor-pointer text-sm py-1">Hoodies</li>
            <li className="cursor-pointer text-sm py-1">Pants</li>
            <li className="cursor-pointer text-sm py-1">Shorts</li>
          </ul>
          <ul
            className="flex flex-col"
            onClick={(e) => {
              switch (e.target.textContent) {
                case "Running":
                  setCategory("Running Shoe");
                  break;
                case "Basketball":
                  setCategory("Basketball Shoe");
                  break;
                case "Lifestyle":
                  setCategory("Lifestyle Shoe");
                  break;
                default:
                  setCategory("Shoe");
              }
              resetStates();
              setAudience(title.toLowerCase());
              navigate("/products");
            }}
          >
            <li className="cursor-pointer text-black py-1">Shoes</li>
            <li className="cursor-pointer text-sm py-1">Running</li>
            <li className="cursor-pointer text-sm py-1">Basketball</li>
            <li className="cursor-pointer text-sm py-1">Lifestyle</li>
          </ul>

          <ul
            className="flex flex-col"
            onClick={(e) => {
              switch (e.target.textContent) {
                case "Headgear":
                  setCategory("Accessories Headgear");
                  break;
                case "Socks":
                  setCategory("Accessories Socks");
                  break;
                default:
                  setCategory("Accessories");
              }
              resetStates();
              setAudience(title.toLowerCase());
              navigate("/products");
            }}
          >
            <li className="cursor-pointer text-black py-1">Accessories</li>
            <li className="cursor-pointer text-sm py-1">Headgear</li>
            <li className="cursor-pointer text-sm py-1">Socks</li>
          </ul>
        </div>
      </div>
    </ul>
  );
};

export default DesktopHiddenNav;
