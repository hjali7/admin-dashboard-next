import Link from 'next/link';
import Image from 'next/image';

import styles from '@/ui/dashboard/users/users.module.css';
import Search from '@/ui/search/search';

export default function Users () {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={'search users!'} />
                <Link href="/dashboard/users/add">
                    <button type='button' className={styles.topBtn}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>created at</td>
                        <td>role</td>
                        <td>status</td>
                        <td>aciton</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/assets/noavatar.png" alt='avatar' width={40} height={40}/>
                                John Deo
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>13.01.2020</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/assets/noavatar.png" alt='avatar' width={40} height={40}/>
                                John Deo
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>13.01.2020</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/assets/noavatar.png" alt='avatar' width={40} height={40}/>
                                John Deo
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>13.01.2020</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <Link href="/">
                                <button type="button" className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};