import React, { useEffect } from "react";

import ExploreSection from "../../components/ExploreSection";
import FollowSection from "../../components/FollowSection";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

import collections from "./collections.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCollections } from "../../store/product";

function Collections() {
  const { status, listOfCollections } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  const toUpperCase = (string: string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getCollections());
  }, []);

  return (
    <>
      {status === "getCollections_loading" && <Loader />}
      {status === "getCollections_success" && (
        <div className={collections.container}>
          {listOfCollections?.map((el, index) => {
            return (
              <div className={collections.section} key={index} id={el.category}>
                <h4 className={collections.title}>
                  {toUpperCase(el.category)}
                </h4>
                <div className={collections.cards}>
                  {el.products.map(
                    (product, index) =>
                      index < 3 && (
                        <ProductCard
                          {...product}
                          id={product._id}
                          key={index}
                        />
                      )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <ExploreSection />
      <FollowSection />
    </>
  );
}

export default Collections;
