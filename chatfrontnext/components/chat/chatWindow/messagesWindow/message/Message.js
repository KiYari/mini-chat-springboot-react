import Box from "../../../../box/Box";
import styles from './message.module.css';
import {useCookies} from "react-cookie";

export default function Message({children, isMine}) {
    const [cookies,
        setCookie,
        removeCookie] = useCookies(['loginToEasyChat']);

    if (isMine) 
        return (
            <div>
                <Box bg={'#b8f1ff'}>
                    {children}
                </Box>
            </div>

        )
    else 
        return (
            <div>
                {cookies.loginToEasyChat}
                <Box>
                    {children}
                </Box>
            </div>

        )
}