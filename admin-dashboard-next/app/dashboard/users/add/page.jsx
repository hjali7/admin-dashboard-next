import styles from '@/ui/dashboard/users/addUser/addUser.module.css';

export default function page() {
  return (
    <div className={styles.container}>
        <div>
            <form action=""  className={styles.forms}>
                <div className={styles.topForm}>
                    <div className={styles.rtForm}>
                        <input type="text" name="username"  placeholder='username' required/>
                        <input type="number" name="password"  placeholder='password' required/>
                        <select name="is admin" id="is admin">
                            <option value={false} selected>Is Admin?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                    <div className={styles.ltForm}>
                        <input type="text" name="email" id="email"  placeholder='Email' required/>
                        <input type="number" name="number" id="number" placeholder='Number' required/>
                        <select name="is active" id="is active" required>
                            <option value={true}>Is Active?</option>
                            <option value={true}>Yes</option>
                            <option value={false}>NO</option>
                        </select>
                    </div>
                </div>
                <div className={styles.bottomForm}>
                    <textarea placeholder='Address' name='address' id='address'></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
};
