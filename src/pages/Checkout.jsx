import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Thank you for making this purchase</h1>
      <Link
        to="/shop"
        className="text-lg text-blue-500 underline">
        Go shopping
      </Link>
    </div>
  );
}

export default Checkout;