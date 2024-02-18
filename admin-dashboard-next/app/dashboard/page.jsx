import {Card , Chart , RightBar , Transactions} from './index.js';
import styles from "@/ui/dashboard/dashboard.module.css";
export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.rSide}>
        <RightBar />
      </div>
    </div>
  );
};
