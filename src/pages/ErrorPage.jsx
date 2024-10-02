import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen dark:bg-zinc-900">
      <span className="text-lg dark:text-white">
        OOPS! Something went wrong.
      </span>
      <h1 className="text-3xl font-bold text-red-500">
        Error: {error.statusText}
      </h1>
      <Link
        to="/"
        className="text-blue-500 underline">
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
