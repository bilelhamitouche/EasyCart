import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <h1 className="text-xl font-bold text-red">Something went wrong!</h1>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
