import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { RiCloseFill } from "react-icons/ri";
import SubNavList from "./SubNavList";
import FirstListLi from "./FirstListLi";

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isFirstListActive, setIsFirstListActive] = useState(true);
  const [isNewListActive, setIsNewListActive] = useState(false);
  const [isMensListActive, setIsMensListActive] = useState(false);
  const [isWomensListActive, setIsWomensListActive] = useState(false);
  const [isKidsListActive, setIsKidsListActive] = useState(false);
  const [isBackActive, setIsBackActive] = useState(false);
  const [previousList, setPreviousList] = useState("");

  const resetStates = () => {
    setPreviousList("");
    setIsFirstListActive(true);
    setIsNewListActive(false);
    setIsMensListActive(false);
    setIsWomensListActive(false);
    setIsKidsListActive(false);
    setIsBackActive(false);
  };

  return (
    <nav className="flex justify-between items-center bg-white w-full h-[8vh] px-4 text-2xl">
      <div>Logo</div>
      <div className="flex gap-4 cursor-pointer">
        <FiSearch />
        <FiUser />
        <FiShoppingCart />
        <FiMenu
          onClick={() => {
            setIsMobileNavActive(true);
            resetStates();
          }}
        />
      </div>

      {/* Mobile Nav */}
      <ul
        className={`flex flex-col p-4 absolute right-0 top-0 w-[60%] h-screen bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileNavActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <button
            className={`flex justify-center items-center gap-2 text-xl ${
              isBackActive ? "visible" : "invisible"
            }`}
            onClick={() => {
              resetStates();
            }}
          >
            <TfiAngleLeft />
            <p>{previousList}</p>
          </button>
          <button onClick={() => setIsMobileNavActive(false)}>
            <RiCloseFill className="self-end text-3xl" />
          </button>
        </div>

        {/* First List */}
        <div
          className={`flex flex-col gap-8 mt-8 cursor-pointer transform transition-all duration-300 ease-in-out ${
            isFirstListActive
              ? "block pointer-events-auto"
              : "hidden pointer-events-none"
          }`}
        >
          <FirstListLi
            category="New"
            setIsFirstListActive={setIsFirstListActive}
            currentListSetter={setIsNewListActive}
            setIsBackActive={setIsBackActive}
            setPreviousList={setPreviousList}
          />
          <FirstListLi
            category="Mens"
            setIsFirstListActive={setIsFirstListActive}
            currentListSetter={setIsMensListActive}
            setIsBackActive={setIsBackActive}
            setPreviousList={setPreviousList}
          />
          <FirstListLi
            category="Womens"
            setIsFirstListActive={setIsFirstListActive}
            currentListSetter={setIsWomensListActive}
            setIsBackActive={setIsBackActive}
            setPreviousList={setPreviousList}
          />
          <FirstListLi
            category="Kids"
            setIsFirstListActive={setIsFirstListActive}
            currentListSetter={setIsKidsListActive}
            setIsBackActive={setIsBackActive}
            setPreviousList={setPreviousList}
          />
        </div>

        {/* New List */}
        <SubNavList state={isNewListActive} title="New" />
        {/* Mens List */}
        <SubNavList state={isMensListActive} title="Mens" />
        {/* Womens List */}
        <SubNavList state={isWomensListActive} title="Womens" />
        {/* Kids List */}
        <SubNavList state={isKidsListActive} title="Kids" />
      </ul>
    </nav>
  );
};

export default Navbar;
