import styles from './layout.module.css'
import Header from './header/Header'
import {Layout} from "antd";

export default function App({children, left, right}) {
    return(
        <Layout className={styles.layout}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    {left}
                </div>

                <main 
                className={styles.mainContainer}
                >
                    {children}
                </main>

                <div className={styles.rightContainer}>
                    {right}
                </div>
            </div>

        </Layout>
    )
}