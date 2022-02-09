import { SubmitHandler, useForm } from "react-hook-form";
import { FiTruck as TruckIcon } from "react-icons/fi";
import { addItem } from "../../store/cart";
import { useAppDispatch } from "../../store/hooks";

import details from "../../styles/pages/productPage/details.module.scss";

interface Props {
  _id: string;
  name: string;
  price: number;
  description: string;
  stars: number;
  category: string;
  image: string;
}

interface FormValues {
  size: string;
}

function Details({
  _id,
  name,
  price,
  description,
  stars,
  category,
  image,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      addItem({
        _id,
        name,
        price,
        description,
        stars,
        category,
        image,
        size: data.size || "1",
      })
    );
  };

  return (
    <form className={details.container} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={details.name}>{name}</h4>
      <span className={details.stars}>{`${stars}/5✰`}</span>
      <p className={details.caracteristics}>{description}</p>
      <span className={details.price}>{`$${price}.99`}</span>
      <span className={details.shipping}>Plus Shipping</span>
      <span className={details.color}>Color</span>
      <div className={details.size}>
        <h4>Choose a size</h4>
        <div className={details.sizeInputs}>
          <label htmlFor="S">S</label>
          <input
            type="radio"
            id="S"
            value="S"
            {...register("size", { required: "Please select a size" })}
          />
          <label htmlFor="M">M</label>
          <input
            type="radio"
            id="M"
            value="M"
            {...register("size", { required: "Please select a size" })}
          />
          <label htmlFor="L">L</label>
          <input
            type="radio"
            id="L"
            value="L"
            {...register("size", { required: "Please select a size" })}
          />
          <label htmlFor="XL">XL</label>
          <input
            type="radio"
            id="XL"
            value="XL"
            {...register("size", { required: "Please select a size" })}
          />
          {errors.size ? (
            <div style={{ color: "red" }}>{errors.size.message}</div>
          ) : null}
        </div>
      </div>

      <button
        className={details.button}
        type="submit"
      >{`Add to cart | $${price}.99`}</button>
      <span className={details.time}>
        Shipping time: 3 days <TruckIcon />
      </span>
    </form>
  );
}

export default Details;
