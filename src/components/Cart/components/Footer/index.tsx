import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

import footer from "./footer.module.scss";

function Footer() {
  return (
    <div className={footer.container}>
      <div className={footer.subtotal}>
        <ul className={footer.subtotalLeft}>
          <li>Subtotal</li>
          <li>Shipping costs</li>
        </ul>
        <ul className={footer.subtotalRight}>
          <li>subtotal.00</li>
          <li>$11.34</li>
        </ul>
      </div>
      <div className={footer.total}>
        <span>Total</span>
        <div>
          <span>subtotal11.34</span>
        </div>
      </div>
      <span className={footer.green}>Includes shipping costs</span>
      <button className={footer.checkout}>
        <CartIcon />
        CHECK OUT
      </button>
    </div>
  );
}

export default Footer;
