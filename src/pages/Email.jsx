import { Link } from "react-router-dom";

function Email() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-3xl font-bold dark:text-gray-200">
        Thank you for contacting Us
      </h1>
      <Link
        to="/"
        className="text-lg text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}

export default Email;
