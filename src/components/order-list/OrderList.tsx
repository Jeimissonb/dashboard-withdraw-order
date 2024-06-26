import { Order } from '../../models/Order';
import styles from './OrderList.module.scss';

interface OrderListProps {
  orders: Order[];
}

export function OrderList({ orders }: OrderListProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Produto(s)</th>
          <th>Valor Total (R$)</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td data-label="Cliente">{order.cliente.nome}</td>
            <td data-label="Produto(s)">
              {order.produtos.map((produto, index) => (
                <div key={index}>
                  {produto.nome} - R${produto.valor.toFixed(2)}
                </div>
              ))}
            </td>
            <td data-label="Valor Total (R$)">{`R$${order.valorTotal.toFixed(2)}`}</td>
            <td data-label="Email" className={styles.oneLineEllipsis}>{order.cliente.email}</td>
            <td data-label="Status">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}