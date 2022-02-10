import { Link } from "react-router-dom";

import noproducts from "../../styles/pages/checkout/noproducts.module.scss";

function NoProducts() {
  return (
    <div className={noproducts.container}>
      <h1>No products to see</h1>
      <Link className={noproducts.button} to="/collections">
        Continue Shopping
      </Link>
    </div>
  );
}

export default NoProducts;
