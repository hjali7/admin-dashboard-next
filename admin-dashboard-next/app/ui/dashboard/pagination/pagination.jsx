import styles from './pagination.module.css';
export default function Pagination () {
    return (
        <div className={styles.container}>
            <button disabled >Previous</button>
            <button type="button">Next</button>
        </div>
    );
};