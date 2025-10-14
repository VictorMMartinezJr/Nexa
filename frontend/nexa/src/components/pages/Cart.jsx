import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import CartItem from "../CartItem";
import Login from "./Login";

const Cart = () => {
  const [totalWithTax, setTotalWithTax] = useState(0.0);
  const [tax, setTax] = useState(0.0);

  const calculateTax = (price) => {
    const taxRate = 0.06;

    // Set tax amount
    const taxAmount = parseFloat((price * taxRate).toFixed(2));
    setTax(taxAmount);

    // Set total with tax
    const totalPrice = parseFloat(price + taxAmount);
    setTotalWithTax(totalPrice);
  };

  const { cart, getUserCart, getAuthStatus } = useContext(AppContext);

  useEffect(() => {
    const fetchCart = async () => {
      await getAuthStatus();
      await getUserCart();
    };
    fetchCart();
  }, []);

  useEffect(() => {
    calculateTax(cart?.total || 0);
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col justify-around items-center px-4 2xl:px-8 lg:justify-start">
      <div className="flex flex-col items-center my-10">
        <h2 className="text-3xl">Cart</h2>
        <p className="text-gray-500 lg:text-xl lg:mt-5">
          {cart?.items.length} Items{" "}
          {cart?.items.length > 0 && (
            <span className="text-black">| $ {cart?.total}</span>
          )}
        </p>
      </div>

      <div className="flex flex-col w-full lg:flex-row xl:w-[70%]">
        {/* Items */}
        <div className="flex flex-col gap-6 w-full">
          {/* If there are items in the cart, map through them and display them */}
          {cart?.items.length > 0 ? (
            cart?.items.map((i) => (
              <CartItem
                key={i.id}
                productId={i.productId}
                productName={i.productName}
                productPrice={i.productPrice}
                quantity={i.quantity}
                category={i.category}
                imgURL={i.imageURL}
              />
            ))
          ) : (
            <p>There are no items in your cart</p>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full my-10 lg:my-0 lg:ml-10">
          <h2 className="text-3xl">Summary</h2>
          <div className="flex justify-between">
            <p className="lg:text-xl">Subtotal</p>
            <p className="lg:text-xl">$ {cart?.total}</p>
          </div>
          <div className="flex justify-between">
            <p className="lg:text-xl">Estimated Shipping</p>
            <p className="lg:text-xl">Free</p>
          </div>

          <div className="flex justify-between">
            <p className="lg:text-xl">Estimated Tax</p>
            <p className="lg:text-xl">$ {tax}</p>
          </div>

          <div className="flex justify-between">
            <p className="lg:text-xl">Subtotal</p>
            <p className="lg:text-xl">$ {totalWithTax}</p>
          </div>
          <button className="cursor-pointer bg-black text-white py-4 rounded-full w-full mt-5 xl:text-xl">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
