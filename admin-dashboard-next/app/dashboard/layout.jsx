import Sidebar from '../ui/dashboard/sildebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';
import styles from '@/app/ui/dashboard/dashboard.module.css'

export default function layout({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
