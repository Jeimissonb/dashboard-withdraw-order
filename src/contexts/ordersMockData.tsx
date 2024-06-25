import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Order } from "../models/Order";
import ordersMockData from '../data/mock.json';


interface IOrdersMockDataState {
  orders: Order[];
  totalAmount: number;
  totalCount: number;
}

const OrdersMockDataContext = createContext<IOrdersMockDataState | undefined>(undefined);

interface IOrdersMockDataProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: IOrdersMockDataProviderProps) {

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(ordersMockData);
  }, []);

  const totalAmount = orders.reduce((acc, order) => acc + order.valorTotal, 0);
  const totalCount = orders.length;

  return (
    <OrdersMockDataContext.Provider value={{ orders, totalAmount, totalCount }}>
      {children}
    </OrdersMockDataContext.Provider>
  );
}

export function useOrdersMockDataContext() {
  const context = useContext(OrdersMockDataContext);
  if (!context) {
    throw new Error('useOrdersMockDataContext must be used within a OrdersMockDataContextProvider');
  }
  return context;
}
