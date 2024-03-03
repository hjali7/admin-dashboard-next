import styles from './rightbar.module.css';

export default function RightBar (props) {
    return (
        <div className={styles.container}>
            <div>
                <span>{props.icon}</span>
                {props.title}
            </div>
            <h3>{props.txt}</h3>
            <p>{props.para}</p>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt minus sed libero at reprehenderit!</span>
            <button className={styles.btn}>
                <span>{props.iconBtn}</span>
                {props.btnTxt}
            </button>
        </div>
    )
}