import Header from "../Header";
import Footer from "../Footer";
import Copyright from "../Copyright";
import Cart from "../Cart";

import { useAppSelector } from "../../store/hooks";

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
