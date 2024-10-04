import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaBars, FaMoon } from "react-icons/fa";

function Header() {
  const [dark, setDark] = useState(false);
  const [animated, setAnimated] = useState(false);
  const { cart } = useContext(CartContext);

  function toggleDark() {
    setDark(!dark);
    document.body.classList.toggle("dark");
    setAnimated(true);
    setTimeout(() => setAnimated(false), 300);
  }
  return (
    <header className="flex justify-between items-center p-8">
      <Link
        to="/"
        className="text-3xl font-bold text-black dark:text-gray-200">
        Easy<span className="text-blue-700">Cart</span>
      </Link>
      <nav className="hidden gap-8 justify-between items-center md:flex">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-500" : "dark:text-gray-200"
          }
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-500" : "dark:text-gray-200"
          }
          to="/shop">
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-500" : "dark:text-gray-200"
          }
          to="/about">
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-700 dark:text-blue-500" : "dark:text-gray-200"
          }
          to="/contact">
          Contact
        </NavLink>
      </nav>
      <div className="flex gap-4 items-center">
        <Link
          to="/cart"
          className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <span
            className={`w-4 bottom-5 bg-red-500 text-center dark:text-zinc-900 text-white left-5 text-[11px] h-4 rounded-full ${cart.length === 0 ? "hidden" : "absolute"}`}>
            {cart.length}
          </span>
          <BsCart3 className="text-xl font-bold dark:text-gray-200" />
        </Link>
        <button
          className={`flex justify-center items-center p-2 w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${animated ? "animate-darkMode" : ""}`}
          onClick={toggleDark}>
          {dark ? (
            <FaMoon className="text-xl font-bold dark:text-gray-200" />
          ) : (
            <MdSunny className="text-xl font-bold dark:text-gray-200" />
          )}
        </button>
        <button className="block p-2 rounded-full md:hidden hover:bg-gray-100">
          <FaBars className="text-xl font-bold" />
        </button>
      </div>
    </header>
  );
}

export default Header;
