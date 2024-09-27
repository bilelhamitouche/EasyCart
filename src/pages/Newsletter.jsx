import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center p-8 mx-auto lg:container">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold">
          Thank you for subscribing to our newsletter
        </h1>
        <p className="text-gray-500 text-md">Check your email account</p>
      </div>
      <div className="flex gap-8 justify-between items-center">
        <Link
          to="/"
          className="text-lg text-blue-500 underline">
          Go Home
        </Link>
        <Link
          to="/shop"
          className="text-lg text-blue-500 underline">
          Go shopping
        </Link>
      </div>
    </div>
  );
}

export default Newsletter;
