import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "../components/Products";
import Cart from "../components/Cart";
import App from "../App";
import Home from "../components/Home";
import Contact from "../components/Contact";
import ProductView from "../components/ProductView";

export default function Router1() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <ProductView />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
