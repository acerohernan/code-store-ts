import { MouseEventHandler } from "react";
import { BsTrash as TrashIcon } from "react-icons/bs";
import { addItem, reduceQuantity, removeItem } from "../../store/cart";
import { useAppDispatch } from "../../store/hooks";

import card from "../../styles/components/cart/card.module.scss";

interface Props {
  _id: string;
  name: string;
  price: number;
  stars: number;
  description: string;
  category: string;
  image: string;
  size: string;
  quantity: number;
}

function Card({
  _id,
  name,
  price,
  stars,
  description,
  category,
  image,
  size,
  quantity,
}: Props) {
  const dispatch = useAppDispatch();

  const handleDeleteItem: MouseEventHandler = () => {
    dispatch(
      removeItem({
        _id,
      })
    );
  };

  const handleAddQuantity: MouseEventHandler = () => {
    dispatch(
      addItem({
        _id,
        name,
        price,
        stars,
        description,
        category,
        image,
        size,
        quantity,
      })
    );
  };

  const handleReduceQuantity: MouseEventHandler = () => {
    dispatch(reduceQuantity({ _id }));
  };

  return (
    <div className={card.container}>
      <div className={card.main}>
        <img src={image} alt="product" className={card.image} />
        <div className={card.details}>
          <h3 className={card.title}>{name}</h3>
          <span className={card.creator}>hernan acero</span>
          <button className={card.trashButton} onClick={handleDeleteItem}>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className={card.table}>
        <div className={card.row}>
          <span className={card.header}>Size</span>
          <span>{size}</span>
        </div>
        <div className={card.row}>
          <span className={card.header}>Quantity</span>
          <div className={card.quantityBtns}>
            <button
              className={card.minusButton}
              onClick={handleReduceQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className={card.plusButton}
              disabled={quantity === 10}
              onClick={handleAddQuantity}
            >
              +
            </button>
          </div>
        </div>
        <div className={card.row}>
          <span className={card.header}>Price</span>
          <span>{`${price}.00`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
