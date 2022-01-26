import React from "react";
import { BsTrash as TrashIcon } from "react-icons/bs";

import card from "./card.module.scss";

function Card() {
  return (
    <div className={card.container}>
      <div className={card.main}>
        <img src="" alt="product" className={card.image} />
        <div className={card.details}>
          <h3 className={card.title}>"name"</h3>
          <span className={card.creator}>hernan acero</span>
          <button className={card.trashButton}>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className={card.table}>
        <div className={card.row}>
          <span className={card.header}>Size</span>
          <span>"size"</span>
        </div>
        <div className={card.row}>
          <span className={card.header}>Quantity</span>
          <div className={card.quantityBtns}>
            <button className={card.minusButton}>-</button>
            <span>quantity</span>
            <button className={card.plusButton}>+</button>
          </div>
        </div>
        <div className={card.row}>
          <span className={card.header}>Price</span>
          <span>{`$price.00`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
