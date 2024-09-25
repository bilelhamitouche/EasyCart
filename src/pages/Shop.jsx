import { useOutletContext } from "react-router-dom";

function Shop() {
  const products = useOutletContext();
  console.log(products);
  return (
    <main className="flex justify-center items-center p-8 h-full">
      {products.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </main>
  );
}

export default Shop;
