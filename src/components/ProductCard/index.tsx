import { Link } from "react-router-dom";

import product from "./product.module.scss";

function ProductCard() {
  return (
    <Link to={`/product/category/_id`} className={product.linkContainer}>
      <div className={product.container}>
        <img src="{image}" alt="product card" className={product.image} />
        <span className={product.title}>name</span>
        <p className={product.text}>description</p>
        <span className={product.price}>{`$price.00`}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
