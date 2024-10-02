import { Link } from "react-router-dom";
import shoppingBagsImage from "../assets/shopping-bags.svg";
import FeatureCard from "../components/FeatureCard";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import ProductCategoryCard from "../components/ProductCategoryCard";
import manClothingImage from "../assets/man-clothing.jpg";
import womanClothingImage from "../assets/woman-clothing.jpg";
import jewelryImage from "../assets/jewelry.jpg";
import electronicsImage from "../assets/electronics.jpg";

function Home() {
  return (
    <main className="p-8 mx-auto lg:container">
      <section className="flex flex-col-reverse gap-16 justify-center items-center mx-auto mb-36 md:flex-row md:gap-8">
        <div className="flex flex-col flex-grow-0 gap-6 justify-center items-center text-center md:gap-4 md:items-start md:w-1/2 md:text-left">
          <h2 className="text-5xl font-bold text-black dark:text-gray-200">
            Your One-Stop shop for Everything you need!
          </h2>
          <span className="text-lg font-bold text-blue-700 dark:text-blue-500">
            Convenient, fast, easy.
          </span>
          <p className="text-black dark:text-gray-200">
            Welcome to EasyCart! Discover an effortless shopping experience with
            a wide range of products at your fingertips. Enjoy browsing, and
            find what you love—all in one place!
          </p>
          <Link
            to="/shop"
            className="py-2 px-5 font-semibold text-white bg-blue-700 rounded-lg transition-colors dark:bg-blue-500 hover:bg-blue-600 text-md dark:hover:bg-blue-700 dark:text-zinc-900">
            Start shopping
          </Link>
        </div>
        <img
          src={shoppingBagsImage}
          alt="shopping bags"
          className="object-cover md:w-1/2"
        />
      </section>
      <section className="flex flex-col gap-16 mb-36">
        <h2 className="text-4xl font-bold text-center text-black dark:text-gray-200">
          What we offer
        </h2>
        <div className="grid grid-cols-1 gap-8 justify-evenly items-center sm:grid-cols-3">
          <FeatureCard
            feature="Secure checkout"
            icon={
              <MdOutlineSecurity className="text-8xl text-blue-700 dark:text-blue-500" />
            }
          />
          <FeatureCard
            feature="Fast delivery"
            icon={
              <FaTruck className="text-8xl text-blue-700 dark:text-blue-500" />
            }
          />
          <FeatureCard
            feature="Fast delivery"
            icon={
              <BiSupport className="text-8xl text-blue-700 dark:text-blue-500" />
            }
          />
        </div>
      </section>
      <section className="flex flex-col gap-16 mb-36">
        <h2 className="text-4xl font-bold text-center text-black dark:text-gray-200">
          Our product categories
        </h2>
        <div className="flex flex-col gap-8 justify-center items-center md:flex-row">
          <ProductCategoryCard
            name="Men's clothing"
            image={manClothingImage}
          />
          <ProductCategoryCard
            name="Women's clothing"
            image={womanClothingImage}
          />
          <ProductCategoryCard
            name="Jewelry"
            image={jewelryImage}
          />
          <ProductCategoryCard
            name="Electronics"
            image={electronicsImage}
          />
        </div>
      </section>
      <section className="flex flex-col gap-16 justify-center items-center mb-36 sm:flex-row sm:gap-0 sm:justify-evenly">
        <h2 className="text-4xl font-bold text-center text-black sm:text-left dark:text-gray-200">
          Do you have any questions?
        </h2>
        <Link
          to="/contact"
          className="py-2 px-5 font-semibold text-white bg-blue-700 rounded-lg transition-colors dark:bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-700 dark:text-zinc-900">
          Contact us
        </Link>
      </section>
    </main>
  );
}

export default Home;
