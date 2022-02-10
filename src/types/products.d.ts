export interface IProduct {
  _id: string;
  name: string;
  price: number;
  stars: number;
  description: string;
  category: string;
  image: string;
  size?: string;
  quantity: number;
}

export interface ICollection {
  _id: string;
  category: string;
  products: Array<IProduct>;
}
