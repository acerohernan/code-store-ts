import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCart } from "../../store/cart";

import Header from "./header";
import Footer from "./footer";
import NoProducts from "./noProducts";
import Card from "./card";

import cart from "../../styles/components/cart/cart.module.scss";

function Cart() {
  const { items } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  return (
    <>
      <section className={cart.container}>
        <Header closeCart={handleCloseCart} />
        <div className={cart.body}>
          {items &&
            items.map((item, index) => {
              return <Card {...item} key={index} size="1" />;
            })}
        </div>
        <Footer />
        {false && <NoProducts />}
      </section>
      <div className={cart.shadow}></div>
    </>
  );
}

export default Cart;
