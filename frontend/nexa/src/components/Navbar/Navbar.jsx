import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { TfiAngleLeft } from "react-icons/tfi";
import { RiCloseFill } from "react-icons/ri";
import SubNavList from "./SubNavList";
import FirstListLi from "./FirstListLi";
import DesktopHiddenNav from "./DesktopHiddenNav";
import SearchbarContainer from "./SearchBarContainer";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  // Mobile Nav States
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isFirstListActive, setIsFirstListActive] = useState(true);
  const [isNewListActive, setIsNewListActive] = useState(false);
  const [isMensListActive, setIsMensListActive] = useState(false);
  const [isWomensListActive, setIsWomensListActive] = useState(false);
  const [isKidsListActive, setIsKidsListActive] = useState(false);
  const [isBackActive, setIsBackActive] = useState(false);
  const [previousList, setPreviousList] = useState("");
  // Desktop Nav States
  const [isNewDesktopListActive, setIsNewDesktopListActive] = useState(false);
  const [isMensDesktopListActive, setIsMensDesktopListActive] = useState(false);
  const [isWomensDesktopListActive, setIsWomensDesktopListActive] =
    useState(false);
  const [isKidsDesktopListActive, setIsKidsDesktopListActive] = useState(false);
  // Searchbar State
  const [isSearchbarActive, setIsSearchbarActive] = useState(false);

  const resetMobileStates = () => {
    setPreviousList("");
    setIsFirstListActive(true);
    setIsNewListActive(false);
    setIsMensListActive(false);
    setIsWomensListActive(false);
    setIsKidsListActive(false);
    setIsBackActive(false);
  };

  const resetDesktopStates = () => {
    setIsNewDesktopListActive(false);
    setIsMensDesktopListActive(false);
    setIsWomensDesktopListActive(false);
    setIsKidsDesktopListActive(false);
  };

  const changeDesktopListState = (stateSetter) => {
    setIsNewDesktopListActive(false);
    setIsMensDesktopListActive(false);
    setIsWomensDesktopListActive(false);
    setIsKidsDesktopListActive(false);
    stateSetter(true);
  };

  return (
    <nav className="flex justify-between items-center bg-white w-full h-[8vh] px-4 text-2xl relative z-10 2xl:px-8">
      <img src={logo} className="w-12 h-12" />
      {/* Desktop Nav */}
      <ul className="hidden lg:flex lg:justify-center lg:items-center cursor-pointer">
        <li
          className="px-2"
          onMouseEnter={() => changeDesktopListState(setIsNewDesktopListActive)}
        >
          New
        </li>
        <li
          className="px-2"
          onMouseEnter={() =>
            changeDesktopListState(setIsMensDesktopListActive)
          }
        >
          Mens
        </li>
        <li
          className="px-2"
          onMouseEnter={() =>
            changeDesktopListState(setIsWomensDesktopListActive)
          }
        >
          Womens
        </li>
        <li
          className="px-2"
          onMouseEnter={() =>
            changeDesktopListState(setIsKidsDesktopListActive)
          }
        >
          Kids
        </li>
      </ul>

      <DesktopHiddenNav
        category="New"
        state={isNewDesktopListActive}
        resetStates={resetDesktopStates}
      />
      <DesktopHiddenNav
        category="Mens"
        state={isMensDesktopListActive}
        resetStates={resetDesktopStates}
      />
      <DesktopHiddenNav
        category="Womens"
        state={isWomensDesktopListActive}
        resetStates={resetDesktopStates}
      />
      <DesktopHiddenNav
        category="Kids"
        state={isKidsDesktopListActive}
        resetStates={resetDesktopStates}
      />

      {/* Searchbar */}
      <SearchbarContainer
        state={isSearchbarActive}
        setState={setIsSearchbarActive}
      />

      <div className="flex gap-4 cursor-pointer">
        <FiSearch onClick={() => setIsSearchbarActive(true)} />
        <FiUser />
        <FiShoppingCart />
        <FiMenu
          className="lg:hidden"
          onClick={() => {
            setIsMobileNavActive(true);
            resetMobileStates();
          }}
        />
      </div>

      {/* Mobile Nav */}
      <ul
        className={`flex flex-col p-4 absolute right-0 top-0 w-[60%] h-screen bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileNavActive ? "translate-x-0" : "translate-x-full"
        } md:w-[30%] lg:hidden`}
      >
        <div className="flex justify-between items-center w-full">
          <button
            className={`flex justify-center items-center gap-2 text-xl cursor-pointer ${
              isBackActive ? "visible" : "invisible"
            }`}
            onClick={() => {
              resetMobileStates();
            }}
          >
            <TfiAngleLeft />
            <p>{previousList}</p>
          </button>
          <button onClick={() => setIsMobileNavActive(false)}>
            <RiCloseFill className="self-end text-3xl cursor-pointer" />
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
