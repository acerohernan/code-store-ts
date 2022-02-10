import { useEffect, useState } from "react";
import { IProduct } from "../types/products";

export const useSubtotal = (products: Array<IProduct>) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sumOfProducts = 0;

    products.forEach(({ quantity, price }) => {
      sumOfProducts = quantity * price + sumOfProducts;
      return;
    });

    setSubtotal(sumOfProducts);
  }, [products]);

  return { subtotal };
};
