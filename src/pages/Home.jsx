import { Link } from "react-router-dom";
import shoppingBagsImage from "../assets/shopping-bags.svg";
import FeatureCard from "../components/FeatureCard";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

function Home() {
  return (
    <main className="p-8 mx-auto lg:container">
      <section className="flex gap-8 justify-center items-center mx-auto mb-24">
        <div className="flex flex-col flex-grow-0 gap-4 justify-center items-start w-1/2">
          <h2 className="text-5xl font-bold">
            Your One-Stop shop for Everything you need!
          </h2>
          <span className="text-lg font-bold text-gray-500">
            Convenient, fast, easy.
          </span>
          <p>
            Welcome to EasyCart! Discover an effortless shopping experience with
            a wide range of products at your fingertips. Enjoy browsing, and
            find what you love—all in one place!
          </p>
          <Link
            to="/shop"
            className="py-2 px-5 font-semibold text-white bg-blue-700 rounded-lg transition-colors hover:bg-blue-600 text-md">
            Start shopping
          </Link>
        </div>
        <img
          src={shoppingBagsImage}
          alt="shopping bags"
          className="object-cover w-1/2"
        />
      </section>
      <section className="flex flex-col gap-16">
        <h2 className="text-4xl font-bold text-center">What we offer</h2>
        <div className="grid grid-cols-3 gap-8 justify-evenly items-center">
          <FeatureCard
            feature="Secure checkout"
            icon={<MdOutlineSecurity className="text-8xl text-blue-700" />}
          />
          <FeatureCard
            feature="Fast delivery"
            icon={<FaTruck className="text-8xl text-blue-700" />}
          />
          <FeatureCard
            feature="Fast delivery"
            icon={<BiSupport className="text-8xl text-blue-700" />}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
