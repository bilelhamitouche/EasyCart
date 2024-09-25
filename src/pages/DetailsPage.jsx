import { useLoaderData, useNavigation } from "react-router-dom";

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
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <div className="flex flex-col gap-4 justify-center items-center p-8 mx-auto h-screen lg-container">
        <span>Loading...</span>
      </div>
    );
  return (
    <div className="flex gap-8 justify-center items-center p-8 mx-auto lg:container">
      <div className="flex gap-16 justify-center items-center w-4/6">
        <img
          src={product.image}
          alt={`${product.title} image`}
          className="object-center w-96 h-96 rounded-lg"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">{product.title}</h3>
          <span className="text-gray-500 uppercase text-md">
            {product.category}
          </span>
          <p className="text-md">{product.description}</p>
          <div className="flex gap-4 justify-between items-center">
            <label className="flex gap-4 items-center w-4/6">
              <span className="font-bold text-md">Qty:</span>
              <input
                type="number"
                max={"200"}
                min={"1"}
                defaultValue={"1"}
                className="p-2 w-full rounded-md border border-gray-200 outline-none"
              />
            </label>
            <span className="text-lg font-bold">{product.price} $</span>
          </div>
          <button className="py-4 px-5 text-lg text-white bg-blue-700 rounded-lg hover:bg-blue-500">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
