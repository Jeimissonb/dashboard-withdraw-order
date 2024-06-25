
import { OrderList } from '../../components/order-list/OrderList';
import { TotalOrdersAmount } from '../../components/total-orders-amount/TotalOrdersAmount';
import { TotalOrdersCount } from '../../components/total-orders-count/TotalOrdersCount';
import { useOrdersMockDataContext } from '../../contexts/ordersMockData';
import styles from './MainPage.module.scss';


export function MainPage() {

  const { orders, totalAmount, totalCount } = useOrdersMockDataContext();

  return (
      <div className={styles.container}>
        <div className={styles.cards}>
          <TotalOrdersAmount amount={totalAmount} />
          <TotalOrdersCount count={totalCount} />
        </div>
        <OrderList orders={orders} />
      </div>
  );
}