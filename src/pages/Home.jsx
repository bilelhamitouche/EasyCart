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
      <section className="flex gap-8 justify-center items-center mx-auto mb-36">
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
      <section className="flex flex-col gap-16 mb-36">
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
      <section className="flex flex-col gap-16 mb-36">
        <h2 className="text-4xl font-bold text-center">
          Our product categories
        </h2>
        <div className="flex gap-8 justify-center items-center">
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
      <section className="flex justify-evenly items-center mb-36">
        <h2 className="text-4xl font-bold">Do you have any questions?</h2>
        <Link
          to="/contact"
          className="py-2 px-5 font-semibold text-white bg-blue-700 rounded-lg transition-colors hover:bg-blue-600">
          Contact us
        </Link>
      </section>
    </main>
  );
}

export default Home;
