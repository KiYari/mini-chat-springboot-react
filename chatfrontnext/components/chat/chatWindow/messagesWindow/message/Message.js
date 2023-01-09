import Box from "../../../../box/Box";
import styles from './message.module.css';

export default function Message({children, isMine}) {
    if(isMine) return(
        <div>
            <Box bg={'#b8f1ff'}>
                {children}
            </Box>
        </div>

    )
    else return(
        <div>
            <Box>
                {children}
            </Box>
        </div>

    )
}