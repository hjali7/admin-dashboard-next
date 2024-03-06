import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';

export default function Search({placeholder}) {
  return (
    <div className={styles.container}>
        <MdSearch size={20}/>
        <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};
