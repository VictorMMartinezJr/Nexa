import axios from "axios";
import { removeItem } from "framer-motion";
import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const CartItem = ({
  productId,
  productName,
  productPrice,
  quantity,
  category,
  imgURL,
}) => {
  const { getUserCart } = useContext(AppContext);
  axios.defaults.withCredentials = true;

  const handleIncrementQty = async (productId, quantity) => {
    try {
      const response = await axios.post("http://localhost:8080/api/cart/add", {
        productId,
        quantity,
      });

      if (response.status === 200) {
        toast.success("Item quantity updated.");
        await getUserCart();
      }
    } catch (error) {
      toast.error("Unable to update item quantity. Please try again.");
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/cart/remove/${productId}`
      );
      if (response.status === 200) {
        toast.success("Item removed from cart.");
        await getUserCart();
      }
    } catch (error) {
      toast.error("Unable to remove item from cart. Please try again.");
    }
  };

  return (
    <div className="flex justify-between w-full">
      <div>
        <img
          src={imgURL ? imgURL : "https://placehold.co/180x180"}
          alt=""
          className="lg:w-80"
        />
        <div className="mt-2 border-1 rounded-full flex justify-around items-center py-1 w-3/4 lg:w-1/2">
          <button
            className="cursor-pointer"
            onClick={() => handleRemoveItem(productId)}
          >
            <FaRegTrashAlt />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer"
            onClick={() => handleIncrementQty(productId, 1)}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex flex-col w-full pl-4 sm:hidden">
        <p className="text-xl">$ {productPrice}</p>
        <p className="text-xl">{productName}</p>
        <p className="text-xl">{category}</p>
        <p className="text-xl text-gray-500">{quantity}</p>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex justify-between w-full pl-4">
        <div>
          <p className="text-xl">{productName}</p>
          <p className="text-xl">{category}</p>
          <p className="text-xl text-gray-500">{quantity}</p>
        </div>
        <p className="text-xl">$ {productPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
