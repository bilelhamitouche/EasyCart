import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Shopping cart</h1>,
      errorElement: (
        <h1 className="text-xl font-bold text-red">Something went wrong!</h1>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
