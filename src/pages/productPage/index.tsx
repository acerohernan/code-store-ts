import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ExploreSection from "../../components/exploreSection";
import FollowSection from "../../components/followSection";
import Details from "./details";
import Reviews from "./reviews";
import LatestProducst from "../../components/latestProducts";

import { reviews } from "../../utils/reviews";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProductById } from "../../store/product";
import Loader from "../../components/loader";
import product from "../../styles/pages/productPage/product.module.scss";

function ProductPage() {
  const { status, productSelected } = useAppSelector((state) => state.product);
  const { category, id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductById({ category: category || "", id: id || "" }));
  }, [category, id]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [category, id]);

  return (
    <>
      {status === "getProductById_loading" && <Loader />}
      <div className={product.container}>
        <div className={product.main}>
          <div className={product.imageContainer}>
            <img
              src={productSelected.image}
              alt="product-img"
              className={product.image}
            />
            <div className={product.secondaryImgs}>
              <img src={productSelected.image} alt="secondary" />
              <img src={productSelected.image} alt="secondary" />
            </div>
          </div>
          <div className={product.sideBar}>
            <Details {...productSelected} />
          </div>
        </div>
        <Reviews reviews={reviews} />
        <LatestProducst />
      </div>
      <ExploreSection />
      <FollowSection />
    </>
  );
}

export default ProductPage;
