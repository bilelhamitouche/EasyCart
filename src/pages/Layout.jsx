import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

  if (navigation.state === "loading")
    return (
      <div className="flex justify-center items-center h-screen">
        ...Loading
      </div>
    );
  return (
    <div className="grid h-screen grid-rows-layout">
      <Header />
      <Outlet context={products} />
      <Footer />
    </div>
  );
}

export default Layout;
