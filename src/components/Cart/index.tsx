import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NoProducts from "./components/NoProducts";
import Card from "./components/Card";

import cart from "./cart.module.scss";
import { useAppDispatch } from "../../store/hooks";
import { closeCart } from "../../store/cart";

function Cart() {
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
          <Card />
        </div>
        <Footer />
        {false && <NoProducts />}
      </section>
      <div className={cart.shadow}></div>
    </>
  );
}

export default Cart;
