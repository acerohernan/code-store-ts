import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSubtotal } from "../../hooks/useSubtotal";
import { closeCart } from "../../store/cart";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import footer from "../../styles/components/cart/footer.module.scss";

function Footer() {
  const { items } = useAppSelector((state) => state.cart);
  const { subtotal } = useSubtotal(items);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCheckout = () => {
    dispatch(closeCart());
    navigate("/checkout");
  };

  return (
    <div className={footer.container}>
      <div className={footer.subtotal}>
        <ul className={footer.subtotalLeft}>
          <li>Subtotal</li>
          <li>Shipping costs</li>
        </ul>
        <ul className={footer.subtotalRight}>
          <li>{subtotal}.00</li>
          <li>$11.34</li>
        </ul>
      </div>
      <div className={footer.total}>
        <span>Total</span>
        <div>
          <span>{subtotal + 11.34}</span>
        </div>
      </div>
      <span className={footer.green}>Includes shipping costs</span>
      <button className={footer.checkout} onClick={handleCheckout}>
        <CartIcon />
        CHECK OUT
      </button>
    </div>
  );
}

export default Footer;
