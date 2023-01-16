import { Button } from 'antd';
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Box from '../../components/box/Box';
import Login from '../../components/login/Login';
import Layout from '../../layout/Layout';
import { useCookies }from 'react-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [error, onError] = useState();
  const [login, setLogin] = useState("NoName");
  const [cookies, setCookie, removeCookie] = useCookies(['loginToEasyChat', 'authorized', 'rooms', 'myId'])

  const connection = (e) => {
    setCookie('loginToEasyChat', login);
    setCookie('authorized', 'true');
    setCookie('rooms', ['General']);
    setCookie('myId', Math.floor(Math.random() * (65536 - 1) + 1));
  }

  const handleChange = (e) => {
    setLogin(e.target.value);
  }

  return (
    <Layout>
        <Box>
          
          <Login 
          onPressEnter={connection}
          onChange={handleChange}
          />

          <Link href="/">
            <Button
            type='primary'
            onClick={connection}> connect </Button>
          </Link>

        </Box>
  
    </Layout>
    )
        
}