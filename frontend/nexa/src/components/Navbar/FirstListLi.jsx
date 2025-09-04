import { TfiAngleRight } from "react-icons/tfi";

const FirstListLi = ({
  category,
  setIsFirstListActive,
  currentListSetter,
  setIsBackActive,
  setPreviousList,
}) => {
  return (
    <li
      className="flex justify-between items-center"
      onClick={() => {
        setIsFirstListActive(false);
        currentListSetter(true);
        setIsBackActive(true);
        setPreviousList("All");
      }}
    >
      <p>{category}</p>
      <TfiAngleRight />
    </li>
  );
};

export default FirstListLi;
