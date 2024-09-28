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

  function addToCart(id, title, image, price, quantity) {
    setCart((prevCart) => [
      ...prevCart,
      {
        id,
        title,
        image,
        price,
        quantity,
      },
    ]);
  }
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCart([]);
  }

  function updateQuantity(id, quantity) {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Product Not found");
    newCart[index].quantity += quantity;
    setCart(newCart);
  }

  if (navigation.state === "loading") return <Loading />;
  return (
    <div className="grid h-screen grid-rows-layout">
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, updateQuantity }}>
        <Header />
        <Outlet context={products} />
      </CartContext.Provider>
      <Footer />
    </div>
  );
}

export default Layout;
