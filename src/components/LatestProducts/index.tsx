import { TailSpin } from "react-loader-spinner";

import ProductCard from "../ProductCard";
import LinkStyled from "../LinkStyled";

import latest from "./latest.module.scss";

function LatestProducts() {
  return (
    <div className={latest.container}>
      <span className={latest.intro}>Introducing Our Latest Products</span>
      <h3 className={latest.title}>
        Limited reservations on upcoming products and restocks
      </h3>
      <LinkStyled to="/collections" text="See more products" />
      <div className={latest.cards}>
        <TailSpin />
        <ProductCard />
      </div>
    </div>
  );
}

export default LatestProducts;
