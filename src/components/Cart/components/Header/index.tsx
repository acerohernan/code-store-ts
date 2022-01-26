import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";

import header from "./header.module.scss";

interface Props {
  closeCart: () => void;
}

function Header({ closeCart }: Props) {
  return (
    <div className={header.container}>
      <h4 className={header.title}>
        <BagIcon />
        YOUR CART
      </h4>
      <button className={header.close} onClick={closeCart}>
        X
      </button>
    </div>
  );
}

export default Header;
