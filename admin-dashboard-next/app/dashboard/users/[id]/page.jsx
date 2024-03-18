import styles from '@/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

export default function SingleUserPage () {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={'/assets/noavatar.png'} alt='UserAvatar' width={200} height={200}/>
                </div>
                Jhon Deo
            </div>
            <div className={styles.formContainer}>
                <form >
                    <div>
                        <label htmlFor="username">UserName:</label>
                        <input type="text" name="username" id="username" placeholder='john deo'/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder='john@gmail.com'/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder='123456'/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="number" maxLength={13} id='phone' name='phone' placeholder='0123456'/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea name="address" id="address" rows="6" placeholder='any city / any st'></textarea>
                    </div>
                    <div>
                        <label htmlFor="isAdmin">Is Admin?</label>
                        <select name="isadmin" id="isAdmin">
                            <option value={true}>NO</option>
                            <option value={false}>YES</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="isActive">Is Admin?</label>
                        <select name="isactive" id="isActive">
                            <option value={false}>NO</option>
                            <option value={true}>YES</option>
                        </select>
                    </div>
                    <button type="button" className={styles.btn}>create user</button>
                </form>
            </div>
        </div>
    )
}