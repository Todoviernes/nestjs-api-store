import { Product } from './products.entity';
import { Customer } from './customer.entity';
import { Transform } from 'class-transformer';

export class Order {
  id: number;
  customer: Customer;
  products: Product;
  total: number;
  status: string;
  date: Date;
}
