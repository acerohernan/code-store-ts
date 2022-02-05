import { Link } from "react-router-dom";

import product from "./product.module.scss";

interface Props {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

function ProductCard({ id, name, description, image, price, category }: Props) {
  return (
    <Link to={`/products/${category}/${id}`} className={product.linkContainer}>
      <div className={product.container}>
        <img src={image} alt="product card" className={product.image} />
        <span className={product.title}>{name || ""}</span>
        <p className={product.text}>{description || ""}</p>
        <span className={product.price}>{`${price || "0"}.00`}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
