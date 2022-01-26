import header from "./header.module.scss";

import { Link } from "react-router-dom";

import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { HiOutlineShoppingBag as BagIcon } from "react-icons/hi";

import logo from "../../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openCart, closeCart } from "../../store/cart";

function Header() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.cart);

  const handleOpenCart = () => {
    if (isOpen) return dispatch(closeCart());
    return dispatch(openCart());
  };

  return (
    <>
      <div className={header.container}>
        <MenuIcon className={header.menu} />
        <Link to="/" className={header.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={header.linksContainer}>
          <Link to="/" className={header.link}>
            HOME
          </Link>
          <Link to="/collections" className={header.link}>
            SHOP
          </Link>
          <a
            href="https://acerohernan.github.io/portfolio/"
            target="_blank"
            className={header.link}
            rel="noreferrer"
          >
            CONTACT
          </a>
        </div>
        <div className={header.cartContainer}>
          <span className={header.currency}>USD</span>
          <button className={header.cart} onClick={handleOpenCart}>
            <BagIcon />
            <span>1</span>
          </button>
        </div>
      </div>
      <div className={header.shadow}></div>
    </>
  );
}

export default Header;
