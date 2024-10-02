import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export async function detailsPageLoader({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`,
    { mode: "cors" }
  );
  if (!response.ok) throw new Error("Unable to fetch product");
  const json = await response.json();
  return json;
}

function DetailsPage() {
  const product = useLoaderData();
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex gap-8 justify-center items-center p-8 mx-auto h-screen lg:container">
      <div className="flex flex-col gap-8 justify-center items-center sm:gap-16 md:flex-row md:gap-16 lg:w-4/6">
        <img
          src={product.image}
          alt={`${product.title} image`}
          className="object-center w-64 h-64 rounded-lg lg:w-96 lg:h-96"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold dark:text-gray-200">
            {product.title}
          </h3>
          <span className="text-gray-500 uppercase text-md">
            {product.category}
          </span>
          <p className="dark:text-gray-200 text-md">{product.description}</p>
          <div className="flex gap-4 justify-between items-center md:justify-between">
            <label className="flex gap-4 items-center w-4/6">
              <span className="font-bold dark:text-gray-200 text-md">Qty:</span>
              <input
                type="number"
                max={"200"}
                min={"0"}
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="p-2 w-full rounded-md border border-gray-200 outline-none dark:text-white dark:border-gray-800 dark:bg-zinc-900"
              />
            </label>
            <span className="text-lg font-bold dark:text-gray-200">
              {product.price} $
            </span>
          </div>
          <button
            onClick={() => {
              const productIndex = cart.findIndex(
                (item) => item.id === product.id
              );
              productIndex === -1
                ? addToCart(
                    product.id,
                    product.title,
                    product.image,
                    product.price,
                    quantity
                  )
                : updateQuantity(product.id, quantity);
            }}
            className="py-4 px-5 text-lg text-white bg-blue-700 rounded-lg dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-700 dark:text-zinc-900">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
