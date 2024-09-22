import { Link } from "react-router-dom";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col gap-6 justify-center items-center p-8 text-white bg-black">
      <div className="flex justify-between items-center w-full">
        <Link
          to="/"
          className="text-2xl font-bold">
          EasyCart
        </Link>
        <nav className="flex gap-8 justify-center items-center">
          <Link to="/home">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="flex gap-6 justify-between items-center w-full">
        <div className="flex flex-col gap-4 justify-center items-start">
          <span>Email: easycart@gmail.com</span>
          <span>Phone: 0516468962</span>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <FaSquareInstagram className="text-xl" />
          <FaSquareFacebook className="text-xl" />
          <FaSquareXTwitter className="text-xl" />
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center"></div>
      <p className="text-sm">Copyright &copy; Bilel Hamitouche 2024.</p>
    </footer>
  );
}

export default Footer;
