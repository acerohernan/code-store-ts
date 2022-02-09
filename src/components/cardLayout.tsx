import Header from "./header";
import Footer from "./footer";
import Copyright from "./copyright";
import Cart from "./Cart";

import { useAppSelector } from "../store/hooks";

interface Props {
  children: any;
}

function CardLayout({ children }: Props) {
  const { isOpen } = useAppSelector((state) => state.cart);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Copyright />
      {isOpen && <Cart />}
    </>
  );
}

export default CardLayout;
