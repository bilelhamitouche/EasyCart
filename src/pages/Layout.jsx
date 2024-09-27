import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Loading from "../components/Loading";

export async function layoutLoader() {
  const response = await fetch("https://fakestoreapi.com/products", {
    mode: "cors",
  });
  if (!response.ok) throw new Error("Unable to fetch products");
  const json = await response.json();
  return json;
}

function Layout() {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  function addToCart({ id, title, price, quantity }) {}
  function removeFromCart({ id }) {}

  if (navigation.state === "loading") return <Loading />;
  return (
    <div className="grid h-screen grid-rows-layout">
      <Header />
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <Outlet context={products} />
      </CartContext.Provider>
      <Footer />
    </div>
  );
}

export default Layout;
