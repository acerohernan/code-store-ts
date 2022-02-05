import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProducts } from "../../store/product";

import ProductCard from "../ProductCard";
import LinkStyled from "../LinkStyled";
import Loader from "../../components/Loader";

import latest from "./latest.module.scss";

function LatestProducts() {
  const { list, status } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
        {list &&
          list.map((product, i) => {
            if (i > 3) return;
            return (
              <ProductCard key={product._id} id={product._id} {...product} />
            );
          })}
      </div>
    </div>
  );
}

export default LatestProducts;
