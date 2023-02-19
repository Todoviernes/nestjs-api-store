export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
