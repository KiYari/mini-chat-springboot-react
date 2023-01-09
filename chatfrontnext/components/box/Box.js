import styles from './box.module.css';

export default function Box({children, bg}) {
    return(
    <div style={{
    background: bg}} className={styles.box}>
        {children}
    </div>
        )
}