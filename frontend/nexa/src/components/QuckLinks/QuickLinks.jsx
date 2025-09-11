import shopShoes from "../../assets/shop-shoes.jpg";
import shopOuterwear from "../../assets/shop-outerwear.jpg";
import QuickLink from "./QuickLink";

const QuickLinks = () => {
  return (
    <div className="h-auto flex flex-col justify-center items-center md:flex-row">
      <QuickLink
        img={shopShoes}
        subText={"Shop the Newest Trends"}
        mainText={"Own Each Step"}
        altText={"Shop shoes"}
      />
      <QuickLink
        img={shopOuterwear}
        subText={"Fresh Layers, Fresh Look"}
        mainText={"Stay Warm. Stay Ahead."}
        altText={"Shop outerwear"}
      />
    </div>
  );
};

export default QuickLinks;
