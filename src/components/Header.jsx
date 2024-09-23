import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

function Header() {
  return (
    <header className="flex justify-between items-center p-8">
      <Link
        to="/"
        className="text-3xl font-bold">
        Easy<span className="text-blue-700">Cart</span>
      </Link>
      <nav className="flex gap-8 justify-between items-center">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-700" : "")}
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-700" : "")}
          to="/shop">
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-700" : "")}
          to="/about">
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-700" : "")}
          to="/contact">
          Contact
        </NavLink>
      </nav>
      <div className="flex gap-4 items-center">
        <Link
          to="/cart"
          className="p-2 rounded-full hover:bg-gray-100">
          <BsCart3 className="text-xl font-bold" />
        </Link>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MdSunny className="text-xl font-bold" />
        </button>
      </div>
    </header>
  );
}

export default Header;
