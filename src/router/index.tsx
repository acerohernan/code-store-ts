import { useRoutes } from "react-router-dom";

import Home from "../pages/home";
import Collections from "../pages/collections";
import ProductPage from "../pages/productPage";
import Checkout from "../pages/checkout";
import Thanks from "../pages/thanks";
import NotFound from "../pages/notFound";

const RouterCodeStore: React.FC = (): JSX.Element => {
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
      element: <Checkout />,
    },
    {
      path: "thanks",
      element: <Thanks />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <>{rtg}</>;
};

export default RouterCodeStore;
