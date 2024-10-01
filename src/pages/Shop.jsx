import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Shop() {
  const products = useOutletContext();
  return (
    <main className="grid grid-cols-1 gap-8 p-8 mx-auto sm:grid-cols-2 lg:container lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
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
