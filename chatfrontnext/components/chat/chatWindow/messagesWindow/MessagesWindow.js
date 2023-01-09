import InheritBox from "../../../box/InheritBox";
import styles from './messagesWindow.module.css'


export default function MessagesWindow({children}) {
    return (
            <InheritBox>
                <div className={styles.scrollable}>
                    {children}
                </div>
            </InheritBox>
    )
}