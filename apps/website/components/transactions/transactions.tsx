import styles from "./transactions.module.css";
import { useSession } from "next-auth/react";

export function Transactions(props) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={styles.container}>
        <h1>Welcome, {session.user.name}</h1>
      </div>
    );
  }
  return <></>;
}

export default Transactions;
