import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="flex flex-col gap-8 items-center p-8 mx-auto h-full lg:container">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-black capitalize dark:text-gray-200">
          contact us
        </h2>
        <p className="text-gray-500 text-md">
          Please fill this form in a decent manner
        </p>
      </div>
      <form className="grid flex-grow-0 grid-cols-2 gap-4 justify-center items-start p-8 mb-16 rounded-lg border border-gray-200 md:max-w-xl dark:border-gray-800">
        <div className="flex flex-col col-span-2 gap-8 justify-between items-center md:flex-row">
          <label className="flex flex-col gap-2 items-start">
            <span className="text-black dark:text-white">First Name: </span>
            <input
              type="text"
              name="firstname"
              className="p-2 rounded-md border border-gray-200 outline-none dark:text-white dark:border-gray-800 hover:border-blue-500 dark:bg-zinc-900"
              placeholder="Enter first name"
            />
          </label>
          <label className="flex flex-col gap-2 items-start">
            <span className="text-black dark:text-white">Last Name: </span>
            <input
              type="text"
              name="lastname"
              className="p-2 rounded-md border border-gray-200 outline-none dark:text-white dark:border-gray-800 hover:border-blue-500 dark:bg-zinc-900"
              placeholder="Enter last name"
            />
          </label>
        </div>
        <label className="flex flex-col col-span-2 gap-2">
          <span className="text-black dark:text-white">Email: </span>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="p-2 rounded-md border border-gray-200 outline-none dark:text-white dark:border-gray-800 hover:border-blue-500 dark:bg-zinc-900"
          />
        </label>
        <label className="flex flex-col col-span-2 gap-2">
          <span className="text-black dark:text-white">Phone number: </span>
          <input
            type="number"
            name="phone"
            placeholder="Enter phone number"
            className="p-2 rounded-md border border-gray-200 outline-none dark:text-white dark:border-gray-800 hover:border-blue-500 dark:bg-zinc-900"
          />
        </label>
        <label className="flex flex-col col-span-2 gap-2">
          <span className="text-black dark:text-white">Message: </span>
          <textarea
            type="number"
            name="phone"
            placeholder="Enter phone number"
            className="p-2 rounded-md border border-gray-200 outline-none dark:text-white dark:border-gray-800 hover:border-blue-500 dark:bg-zinc-900"
          />
        </label>
        <Link
          to="/email"
          className="py-2 px-5 font-semibold text-center text-white bg-blue-700 rounded-md transition-colors dark:bg-blue-500 hover:bg-blue-500 max-w-36 text-md dark:hover:bg-blue-700 dark:text-zinc-900">
          Submit
        </Link>
      </form>
    </main>
  );
}

export default Contact;
