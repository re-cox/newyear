export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string | null;
  desc: string;
}

export interface CartItem extends Product {
  quantity: number;
}