import styles from './sidebar.module.css';
import menuItems  from './data';
import MenuLink from './menuLink/menuLink';

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <ul>
        {
          menuItems.map( category => (
            <li key={category.title}>
              <span className={styles.cat}>{category.title}</span>
              {
                category.list.map( item => (
                  <MenuLink item={item} key={item.title} />
                ))
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};
