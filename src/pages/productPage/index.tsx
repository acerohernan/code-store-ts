import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import ExploreSection from "../../components/ExploreSection";
import FollowSection from "../../components/FollowSection";
import Details from "./components/Details";
import Reviews from "./components/Reviews";
import LatestProducst from "../../components/LatestProducts";

import Loader from "../../components/Loader";
import product from "./product.module.scss";
import { reviews } from "../../utils/reviews";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProductById } from "../../store/product";

function ProductPage() {
  const [item, setItem] = useState();
  const [modalSizeAppear, setModalSizeAppear] = useState(false);
  const { status } = useAppSelector((state) => state.product);
  const { category, id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductById({ category: category || "", id: id || "" }));
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  /* const handleAddToCart = () => {
    if (!item.size) {
      setModalSizeAppear(true);
      return false;
    }
    setModalSizeAppear(false);
    addToCart({
      ...item,
      quantity: 1,
    });
    openCart();
  }; */

  /* const handleAddSize = (size) => {
    setItem({
      ...item,
      size,
    });
  }; */

  return (
    <>
      {status === "getProductById_loading" && <Loader />}
      <div className={product.container}>
        {/* <div className={product.main}>
          <div className={product.imageContainer}>
            <img
              src={item?.image}
              alt="product-img"
              className={product.image}
            />
            <div className={product.secondaryImgs}>
              <img src={item?.image} alt="secondary" />
              <img src={item?.image} alt="secondary" />
            </div>
          </div>
          <div className={product.sideBar}>
            <Details
              {...item}
              handleAddToCart={handleAddToCart}
              addSize={handleAddSize}
              modalSize={modalSizeAppear}
            />
          </div>
        </div> */}
        <Reviews reviews={reviews} />
        <LatestProducst />
      </div>
      <ExploreSection />
      <FollowSection />
    </>
  );
}

export default ProductPage;
