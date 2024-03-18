import styles from '@/ui/login/login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <form action="">
        <h2>Login</h2>
        <input type="text" name="username" id="username" placeholder='username' />
        <input type="password" name="password" id="password"  placeholder='password'/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
