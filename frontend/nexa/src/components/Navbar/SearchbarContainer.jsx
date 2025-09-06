import { FiSearch } from "react-icons/fi";

const SearchbarContainer = ({ state, setState }) => {
  return (
    <div
      className={`flex justify-between items-center bg-white h-[8vh] w-full px-4 absolute top-0 right-0 transform transition-transform duration-300 ease-in-out ${
        state ? "translate-x-0" : "translate-x-full"
      } 2xl:px-8`}
    >
      <p className="hidden lg:block lg:w-1/4">Logo</p>

      {/* Search form */}
      <form className="flex items-center justify-between w-full relative text-lg gap-4">
        {/* Search icon (submit button) */}
        <button
          type="submit"
          className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
        >
          <FiSearch />
        </button>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 rounded-2xl px-8 py-1 lg:w-3/4"
        />
        {/* Cancel button */}
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setState(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SearchbarContainer;
