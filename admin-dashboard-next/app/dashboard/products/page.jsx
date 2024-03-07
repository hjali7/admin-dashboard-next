import Pagination from "@/ui/dashboard/pagination/pagination";
import Search from "@/ui/search/search";
import styles from '@/ui/products/products.module.css';

import Image from "next/image";
import Link from "next/link";

export default function Products () {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={'search products...'} />
                <Link href="/dashboard/users/add">
                    <button type='button' className={styles.topBtn}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>title</td>
                        <td>description</td>
                        <td>price</td>
                        <td>created at</td>
                        <td>stock</td>
                        <td>aciton</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/assets/noproduct.jpg" alt='avatar' width={40} height={40}/>
                                cabel charge
                            </div>
                        </td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                        <td>$200</td>
                        <td>Oct 29 2020</td>
                        <td>21</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button type="button" className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/assets/noproduct.jpg" alt='avatar' width={40} height={40}/>
                                Iphone 13
                            </div>
                        </td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipisicing.</td>
                        <td>$300</td>
                        <td>Feb 12 2020</td>
                        <td>5</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button type="button" className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/assets/noproduct.jpg" alt='avatar' width={40} height={40}/>
                                LG monitor
                            </div>
                        </td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing.</td>
                        <td>$2344</td>
                        <td>Mar 14 2021</td>
                        <td>12</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button type="button" className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}