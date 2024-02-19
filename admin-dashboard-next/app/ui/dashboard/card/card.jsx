import styles from './card.module.css';
import { MdSupervisedUserCircle } from 'react-icons/md';
export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <MdSupervisedUserCircle size={24}/>
      </div>
      <div className={styles.content}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.928</span>
        <div className={styles.details}><span className={styles.positive}>12%</span>more than previous week</div>
      </div>
    </div>
  );
};
