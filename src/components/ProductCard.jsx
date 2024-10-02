import { Link } from "react-router-dom";

function ProductCard({ id, title, image, category }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-4 place-items-center p-8 rounded-md border border-gray-200 dark:border-gray-800 grid-card">
      <img
        src={image}
        alt={`${title} image`}
        className="object-center w-40 h-40"
      />
      <span className="text-gray-500 uppercase text-md">{category}</span>
      <span className="text-black dark:text-white text-md">{title}</span>
      <Link
        to={`/shop/${id}`}
        className="py-2 px-5 text-lg text-white bg-blue-700 rounded-lg transition-colors dark:text-black dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-700">
        Details
      </Link>
    </div>
  );
}

export default ProductCard;
