import details from "./details.module.scss";
import { FiTruck as TruckIcon } from "react-icons/fi";

interface Props {
  name: string;
  price: number;
  description: string;
  stars: number;
  handleAddToCart: any;
  addSize: any;
  modalSize: boolean;
}

function Details({
  name,
  price,
  description,
  stars,
  handleAddToCart,
  addSize,
  modalSize,
}: Props) {
  return (
    <div className={details.container}>
      <h4 className={details.name}>{name}</h4>
      <span className={details.stars}>{`${stars}/5✰`}</span>
      <p className={details.caracteristics}>{description}</p>
      <span className={details.price}>{`$${price}.99`}</span>
      <span className={details.shipping}>Plus Shipping</span>
      <span className={details.color}>Color</span>
      <div className={details.size}>
        <h4>Choose a size</h4>
        <form>
          <label htmlFor="S">S</label>
          <input type="radio" id="S" name="size" />
          <label htmlFor="M">M</label>
          <input type="radio" id="M" name="size" />
          <label htmlFor="L">L</label>
          <input type="radio" id="L" name="size" />
          <label htmlFor="XL">XL</label>
          <input type="radio" id="XL" name="size" />
          {modalSize && (
            <span className={details.sizeModal}>You need to select a size</span>
          )}
        </form>
      </div>

      <button
        className={details.button}
        onClick={handleAddToCart}
      >{`Add to cart | $${price}.99`}</button>
      <span className={details.time}>
        Shipping time: 3 days <TruckIcon />
      </span>
    </div>
  );
}

export default Details;
