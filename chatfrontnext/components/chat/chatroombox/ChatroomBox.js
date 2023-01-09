import Box from "../../box/Box";
import styles from './chatroombox.module.css'

export default function ChatroomBox({children, isHere}) {
    if(isHere) {
        return (
            <Box bg={"#b8f1ff"}>
                {children}
            </Box>
        )
    }
    return(

        <Box>
            <div className={styles.box}>
                {children}
            </div>
        </Box>
    )
}