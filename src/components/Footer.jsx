import { Link } from "react-router-dom";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col gap-6 justify-center items-center p-8 text-white bg-black">
      <nav className="flex flex-col gap-4 justify-center items-center">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="flex gap-4 justify-center items-center">
        <FaSquareInstagram className="text-xl" />
        <FaSquareFacebook className="text-xl" />
        <FaSquareXTwitter className="text-xl" />
      </div>
      <div className="flex gap-2 justify-center items-center"></div>
      <p className="text-sm">Copyright &copy; Bilel Hamitouche 2024.</p>
    </footer>
  );
}

export default Footer;
