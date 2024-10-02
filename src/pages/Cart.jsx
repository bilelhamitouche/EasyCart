import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { cart, removeFromCart, emptyCart, total } = useContext(CartContext);
  return (
    <section className="flex flex-col gap-16 justify-center items-center p-8 mx-auto h-full lg:container">
      {cart.length === 0 ? (
        <div className="flex flex-col gap-8 justify-center items-center">
          <span className="text-3xl font-medium dark:text-gray-200">
            Your cart is empty
          </span>
          <Link
            to="/shop"
            className="py-2 px-5 text-lg font-bold text-white bg-blue-700 rounded-lg dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-700 dark:text-zinc-900">
            Go shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-16 justify-center items-center w-full md:gap-4 md:items-between">
          {cart.map((cartItem) => (
            <li
              key={cartItem.id}
              className="flex flex-col gap-8 justify-evenly items-center py-8 px-16 rounded-lg border border-gray-200 md:flex-row md:p-8 dark:border-gray-800">
              <img
                src={cartItem.image}
                alt={`${cart.title} image`}
                className="object-center w-36"
              />
              <span className="w-44 font-semibold dark:text-gray-200 text-md">
                {cartItem.title}
              </span>
              <span className="dark:text-gray-200 text-md">
                {cartItem.quantity}
              </span>
              <span className="font-semibold dark:text-gray-200 text-md">
                {cartItem.price * cartItem.quantity} $
              </span>
              <button
                onClick={() => removeFromCart(cartItem.id)}
                className="py-2 px-5 font-medium text-white bg-red-600 rounded-md dark:bg-red-500 hover:bg-red-500 dark:hover:bg-red-600 dark:text-zinc-900">
                Delete
              </button>
            </li>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center w-full">
        <span className="w-full text-xl font-bold dark:text-gray-200">
          Total: {total}$
        </span>
        <Link
          to="/checkout"
          onClick={() => emptyCart()}
          className="py-2 px-5 text-lg font-medium text-white bg-black rounded-lg transition-colors hover:opacity-85">
          Checkout
        </Link>
      </div>
    </section>
  );
}

export default Cart;
