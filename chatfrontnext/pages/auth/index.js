import { Button } from 'antd';
import styles from '../../styles/Home.module.css';
import * as SockJS from 'sockjs-client';
import * as stompClient from 'stompjs';
import { useState } from 'react';
import Box from '../../components/box/Box';
import Login from '../../components/login/Login';
import Layout from '../../layout/Layout';
import { useCookies }from 'react-cookie';

export default function Home() {
  var stompClient = null;
  const [error, onError] = useState();
  const [login, setLogin] = useState("NoName");
  const [cookies, setCookie, removeCookie] = useCookies(['loginToEasyChat'])

  const connection = (e) => {
    const Stomp = require("stompjs");
    var SockJS = require("sockjs-client");
    SockJS = new SockJS("http://localhost:8080/ws");
    
    stompClient = Stomp.over(SockJS);
    
    stompClient.connect({}, onConnected, onError);

    setCookie('loginToEasyChat', login);
  }

  const onConnected = () => {
    console.log("connected");

    // stompClient.subscribe(
    //   "/user/" + 2 + "/queue/message", 
    //   onMessageReceived
    // );
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

          <Button
          type='primary'
          onClick={connection}> connect </Button>

        </Box>
  
    </Layout>
    )
        
}