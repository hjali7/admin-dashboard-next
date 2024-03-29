import Image from 'next/image';

import styles from './sidebar.module.css';
import menuItems  from './data';
import MenuLink from './menuLink/menuLink';
import { MdLogout } from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/assets/noavatar.png" width={50} height={50} alt='UserImage'className={styles.userimg}/>
        <div className={styles.userDetails}>
          <span className={styles.username}>John Deo</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {
          menuItems.map( category => (
            <li key={category.title} className={styles.list}>
              <span className={styles.category}>{category.title}</span>
              {
                category.list.map( item => (
                  <MenuLink item={item} key={item.title} />
                ))
              }
            </li>
          ))
        }
      </ul>
      <button type="button" className={styles.logOut}>
        <MdLogout />
        log out
      </button>
    </div>
  );
};
