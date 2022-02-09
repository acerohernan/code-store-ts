import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getCollections } from "../store/product";

import ProductCard from "./productCard";
import LinkStyled from "./linkStyled";
import Loader from "./loader";

import latest from "../styles/components/latest.module.scss";

function LatestProducts() {
  const { status, listOfCollections } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCollections());
  }, []);

  return (
    <div className={latest.container}>
      <span className={latest.intro}>Introducing Our Latest Products</span>
      <h3 className={latest.title}>
        Limited reservations on upcoming products and restocks
      </h3>
      <LinkStyled to="/collections" text="See more products" />
      {status === "getProducts_loading" ? <Loader /> : null}
      <div className={latest.cards}>
        {listOfCollections &&
          listOfCollections[0] &&
          listOfCollections[0].products.map((product) => {
            return <ProductCard key={product._id} {...product} />;
          })}
      </div>
    </div>
  );
}

export default LatestProducts;
