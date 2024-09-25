import { Outlet } from "react-router-dom";
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
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <div className="flex justify-center items-center h-full">...Loading</div>
    );
  return (
    <div className="grid h-screen grid-rows-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
