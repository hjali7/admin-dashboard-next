"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './menuLink.module.css';

export default function MenuLink ({item}) {
    const pathName = usePathname()
    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    );
};