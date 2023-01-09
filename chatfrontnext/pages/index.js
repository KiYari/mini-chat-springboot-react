import { Button } from 'antd';
import styles from '../styles/Home.module.css';
import * as SockJS from 'sockjs-client';
import * as stompClient from 'stompjs';
import { useState } from 'react';
import Box from '../components/box/Box';
import Login from '../components/login/Login';
import Layout from '../layout/Layout';

export default function Home() {
  var stompClient = null;
  const [error, onError] = useState();
  const [login, setLogin] = useState("default");

  const connection = () => {
    const Stomp = require("stompjs");
    var SockJS = require("sockjs-client");
    SockJS = new SockJS("http://localhost:8080/ws");
    
    stompClient = Stomp.over(SockJS);
    
    stompClient.connect({}, onConnected, onError);
  }

  const onConnected = () => {
    console.log("connected");

    stompClient.subscribe(
      "/user/" + 2 + "/queue/message", 
      onMessageReceived
    );
  }
  
  const handleEnter = () => {
    console.log(login);
  }

  const handleChange = (e) => {
    setLogin(e.target.value);
  }

  return (
    <Layout>
        <Box>
          <Login 
          onPressEnter={handleEnter}
          onChange={handleChange}
          />

          <Button
          type='primary'
          onClick={connection}> connect </Button>

        </Box>
  
    </Layout>
    )
        
}