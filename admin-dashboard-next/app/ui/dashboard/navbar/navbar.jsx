"use client"

import { usePathname } from 'next/navigation';

import { MdNotifications , MdOutlineChat , MdPublic , MdSearch } from 'react-icons/md';
import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const pathName = usePathname();
  return (
      <div className={styles.container}>
        <div className={styles.title}>{pathName.split("/").pop()}</div>
        <div className={styles.menu}>
            <div className={styles.searchbar}>
            <MdSearch size={15} />
            <input type="text" placeholder='search...' />
            </div>
          <div className={styles.icons} >
            <Link href="#"><MdOutlineChat size={20} /></Link>
            <Link href="#"><MdNotifications size={20} /></Link>
            <Link href="#"><MdPublic size={20} /></Link>
          </div>
        </div>
      </div>
  );
};
