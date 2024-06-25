import { Client } from "./Client";
import { Product } from "./Product";

export interface Order {
  id: number;
  data: string;
  valorTotal: number;
  produtos: Product[];
  cliente: Client;
  status: string;
}