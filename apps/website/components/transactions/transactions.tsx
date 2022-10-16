import styles from './transactions.module.css';

/* eslint-disable-next-line */
export interface TransactionsProps {}

export function Transactions(props: TransactionsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Transactions!</h1>
    </div>
  );
}

export default Transactions;
