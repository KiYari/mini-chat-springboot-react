import styles from './layout.module.css'

export default function Layout({children}) {
    return(
        <div className={styles.container}>
        <div className={styles.leftContainer}>

        </div>
        <main className={styles.mainContainer}>
            <div className={styles.invisContainer}>
                {children}
            </div>
        </main>
        <div className={styles.rightContainer}>

        </div>
        </div>
    )
}