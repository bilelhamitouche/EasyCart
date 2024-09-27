import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const total = cart.length;
  return (
    <section className="flex flex-col gap-16 justify-center items-center p-8 mx-auto h-full lg:container">
      {cart.length === 0 ? (
        <div className="flex flex-col gap-8 justify-center items-center">
          <span className="text-2xl font-semibold">Your cart is empty</span>
          <Link
            to="/shop"
            className="py-2 px-5 text-lg font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-500">
            Go shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center">
          {cart.map((cartItem) => (
            <li className="flex">
              <span className="text-md">{cartItem.title}</span>
              <span className="text-md">
                {cartItem.price * cartItem.quantity}
              </span>
            </li>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center w-4/6">
        <span className="w-full text-xl font-bold">Total: {total}$</span>
        <Link
          to="/checkout"
          className="py-2 px-5 text-lg font-bold text-white bg-black rounded-lg transition-colors hover:opacity-85">
          Checkout
        </Link>
      </div>
    </section>
  );
}

export default Cart;
