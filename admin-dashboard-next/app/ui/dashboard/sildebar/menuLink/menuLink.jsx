import Link from "next/link";
import styles from './menuLink.module.css';
export default function MenuLink ({item}) {
    return (
        <Link href={item.path}>
            {item.title}
            {item.icon}
        </Link>
    );
};