import styles from './TotalOrdersAmount.module.scss';

interface TotalOrdersAmountProps {
  amount: number;
}

export function TotalOrdersAmount({ amount }: TotalOrdersAmountProps) {
  return (
    <div className={styles.card}>
      <h3>Total de Pedidos (R$)</h3>
      <p>{amount.toFixed(2)+'💲'}</p>
    </div>
  );
}