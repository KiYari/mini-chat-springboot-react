import { Button } from 'antd';
import styles from '../styles/Home.module.css';
import * as SockJS from 'sockjs-client';
import * as stompClient from 'stompjs';
import { useState } from 'react';

export default function Home() {
  var stompClient = null;
  const [error, onError] = useState();

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

  const onMessageReceived = (msg) => {
    const notification = JSON.parse(msg.body);
    const active = JSON.parse(sessionStorage.getItem("recoil-persist"))
      .chatActiveContact;

    if (active.id === notification.senderId) {
      findChatMessage(notification.id).then((message) => {
        const newMessages = JSON.parse(sessionStorage.getItem("recoil-persist"))
          .chatMessages;
        newMessages.push(message);
        setMessages(newMessages);
      });
    } else {
      message.info("Received a new message from " + notification.senderName);
    }
    loadContacts();
  };

  const sendMessage = (msg) => {
      const message = {
        senderId: 1224,
        recipientId: 2,
        senderName: 'currentUser.name',
        recipientName: 'activeContact.name',
        content: 'msg',
        timestamp: new Date(),
      };
        
      stompClient.send("/app/chat", {}, JSON.stringify(message));
  };

  return (
    <div className={styles.container}>
      <main>
        <Button
        type='primary'
        onClick={connection}> connect </Button>

        <Button
        type='primary'
        onClick={sendMessage}> send message </Button>
      </main>
    </div>
  )
}