import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="grid h-full grid-rows-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
