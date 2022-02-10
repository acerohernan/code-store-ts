import { useNavigate } from "react-router-dom";

import { closeCart } from "../../store/cart";
import { useAppDispatch } from "../../store/hooks";
import image from "../../assets/noproducts.jpg";
import noproducts from "../../styles/components/cart/noproducts.module.scss";

function NoProducts() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleContinueShopping = () => {
    navigate("/collections");
    dispatch(closeCart());
  };

  return (
    <div className={noproducts.container}>
      <img src={image} alt="no-prodcuts" />
      <span>Your cart is empty. Do some shopping!</span>
      <button onClick={handleContinueShopping}>Continue shopping</button>
    </div>
  );
}

export default NoProducts;
