import { useRoutes, Navigate } from "react-router-dom";

import Home from "../pages/home";
import Collections from "../pages/collections";
import ProductPage from "../pages/productPage";
import Checkout from "../pages/checkout";
import Thanks from "../pages/thanks";
import NotFound from "../pages/notFound";
import { useAppSelector } from "../store/hooks";

const RouterCodeStore: React.FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state.cart);
  const itemsInCart = items.length > 0;

  const rtg = useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "collections",
      element: <Collections />,
    },
    {
      path: "products/:category/:id",
      element: <ProductPage />,
    },
    {
      path: "checkout",
      element: itemsInCart ? <Checkout /> : <Navigate to="/collections" />,
    },
    {
      path: "thanks",
      element: <Thanks />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <>{rtg}</>;
};

export default RouterCodeStore;
