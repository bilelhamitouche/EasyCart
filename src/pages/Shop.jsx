import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Shop() {
  const products = useOutletContext();
  console.log(products);
  return (
    <main className="grid grid-cols-4 gap-8 p-8 mx-auto lg:container">
      {products.map((product) => (
        <ProductCard
          id={product.id}
          title={product.title}
          image={product.image}
          category={product.category}
        />
      ))}
    </main>
  );
}

export default Shop;
