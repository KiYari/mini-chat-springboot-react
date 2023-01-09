import Box from "../../box/Box";
import styles from './chatWindow.module.css';

export default function ChatWindow({children}) {
    return(
        <div className={styles.mainWindow}>
            {children}
        </div>
    )
}