import styles from './box.module.css';

export default function Box({children}) {
    return(
        <div className={styles.inheritBox}>
            {children}
        </div>
    )
}