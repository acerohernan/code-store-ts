import OrderCard from "./orderCard";
import { useAppSelector } from "../../store/hooks";
import { useSubtotal } from "../../hooks/useSubtotal";
import order from "../../styles/pages/checkout/order.module.scss";

function Order() {
  const { items } = useAppSelector((state) => state.cart);
  const { subtotal } = useSubtotal(items);

  return (
    <div className={order.container}>
      <h3 className={order.title}>You order</h3>
      <div className={order.products}>
        {items.map((item, index) => (
          <OrderCard {...item} key={index} />
        ))}
      </div>
      <div className={order.cupon}>
        <input type="text" placeholder="Gift card or discount code" />
        <button>Apply</button>
      </div>
      <table className={order.subtotal}>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${subtotal}.00</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>$11.34</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>$00.00</td>
          </tr>
        </tbody>
      </table>
      <div className={order.total}>
        <span>Total amount</span>
        <span>${subtotal + 11.34} USD</span>
      </div>
    </div>
  );
}

export default Order;
