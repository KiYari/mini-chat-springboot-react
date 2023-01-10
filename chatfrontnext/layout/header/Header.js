import style from './header.module.css'
import { Button, Layout} from 'antd';
import Link from "next/link";
import { useCookies } from 'react-cookie';
import React from 'react';
import { useRouter } from 'next/router';

const {Header} = Layout

export default function App() {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['loginToEasyChat']);

    const uname = cookies.loginToEasyChat === undefined ? "NoName" : cookies.loginToEasyChat
    const headerOptions = [uname]

    const handleRemoveName = () => {
        removeCookie('loginToEasyChat');
    }

    return(<Header>

    <div className={style.linkHolder}>
        <Link 
        href="/"
        className={style.link}
        >
            {uname}
        </Link>
        <Button
        type='text'
        className={style.link}
        onClick={handleRemoveName}>
            drop your name  
    </Button>
    </div>

    
    </Header>
)
}