import styles from './TotalOrdersCount.module.scss';

interface TotalOrdersCountProps {
  count: number;
}

export function TotalOrdersCount({ count }: TotalOrdersCountProps) {
  return (
    <div className={styles.card}>
      <h3>Total de Pedidos (Unidades)</h3>
      <p>{count}🛒</p>
    </div>
  );
}