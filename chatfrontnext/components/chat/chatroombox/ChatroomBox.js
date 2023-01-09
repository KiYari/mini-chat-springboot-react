import Box from "../../box/Box";
import styles from './chatroombox.module.css'
import Link from "next/link";

export default function ChatroomBox({children, isHere}) {
    const roomName = "/chat/" + children;

    if(isHere) {
        return (
            <Box bg={"#b8f1ff"}>
                {children}
            </Box>
        )
    }

    return(

        <Link href={roomName}>
            <Box>
                <div className={styles.box}>
                    {children}
                </div>
            </Box>
        </Link>
        
    )
}