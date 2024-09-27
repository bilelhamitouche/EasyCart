import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout, { layoutLoader } from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import DetailsPage, { detailsPageLoader } from "./pages/DetailsPage";
import Newsletter from "./pages/Newsletter";
import Checkout from "./pages/Checkout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: layoutLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:id",
          loader: detailsPageLoader,
          element: <DetailsPage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
