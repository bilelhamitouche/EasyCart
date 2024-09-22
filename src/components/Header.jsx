import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-8">
      <h1 className="text-2xl font-bold"> </h1>
      <nav className="flex gap-8 justify-between items-center">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/shop">
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/about">
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          to="/contact">
          Contact
        </NavLink>
      </nav>
      <div className="flex gap-4 items-center"></div>
    </header>
  );
}

export default Header;
