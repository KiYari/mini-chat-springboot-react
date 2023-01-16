import style from './header.module.css'
import {Button, Layout} from 'antd';
import Link from "next/link";
import {useCookies} from 'react-cookie';
import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

const {Header} = Layout

export default function App() {
    const router = useRouter();
    const [cookies,
        setCookie,
        removeCookie] = useCookies(['loginToEasyChat', 'authorized', 'rooms', 'myId']);

    const name = cookies.loginToEasyChat === undefined
        ? "NoName"
        : cookies.loginToEasyChat;

    const [uname, setUname] = useState('');
    const headerOptions = [uname]

    const handleRemoveName = () => {
        removeCookie('loginToEasyChat');
        setCookie('myId', '');
        setCookie('authorized', 'false');
        setCookie('rooms', []);
    }

    useEffect(() => {
        setUname(name);
    }, [handleRemoveName])

    return (
        <Header>

            <div className={style.linkHolder}>
                <Link href="/" className={style.link}>
                    {uname}
                </Link>
                <Link href="/auth">
                    <Button type='text' className={style.link} onClick={handleRemoveName}>
                        drop your name
                    </Button>
                </Link>

            </div>

        </Header>
    )
}