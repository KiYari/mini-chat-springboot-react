import React, {useEffect, useState} from 'react';
import styles from './chat.module.css'
import ChatroomBox from "./chatroombox/ChatroomBox";
import ChatWindow from "./chatWindow/ChatWindow";
import {Button, Input} from 'antd';
import MessagesWindow from "./chatWindow/messagesWindow/MessagesWindow";
import Message from "./chatWindow/messagesWindow/message/Message";
import {useCookies} from 'react-cookie';

export default function ChatComponent() {
    const [cookies, setCookie, removeCookie] = useCookies(['rooms'])
    const [chatrooms, setChatrooms] = useState(['room1']);
    const addRoom = () => {
        setChatrooms(...chatrooms, <ChatroomBox> new </ChatroomBox>)
    }

    const [messages, setMessages] = useState([])
    const handleMessageContentChange = (e) => {
        setContent(e.target.value);
    }
    const sendMessage = (e) => {
        e.preventDefault();
        if(message.content !== '') setMessages([...messages, <Message isMine={true}>{message.content}</Message>]);
        stompClient.send(queue, {}, message.content)
        
        setContent('');
    }

    var queue = "/user/" + 1 + "/queue/message";
    var stompClient;
    const connection = async (e) => {
        const stomp = require("stompjs");
        const SockJS = require("sockjs-client");
        var sock = new SockJS("http://localhost:8080/ws");
        stompClient = stomp.over(sock);
        stompClient.connect({}, onConnected, onError);
    }

    const onConnected = () => {
        console.log("connected");
        stompClient.subscribe(
            queue, 
            onMessageReceived
    );
    }

    const onError = () => {
    console.log(error);
    }

    const [content, setContent] = useState('');
    var message = {
        content: content,
    }
  
    const onMessageReceived = (msg) => {
    console.log(msg.body)
        // const notification = JSON.parse(msg.body);
        // const active = JSON.parse(sessionStorage.getItem("recoil-persist"))
        //   .chatActiveContact;
    
        // if (active.id === notification.senderId) {
        //   findChatMessage(notification.id).then((message) => {
        //     const newMessages = JSON.parse(sessionStorage.getItem("recoil-persist"))
        //       .chatMessages;
        //     newMessages.push(message);
        //     setMessages(newMessages);
        //   });
        // } else {
        //   message.info("Received a new message from " + notification.senderName);
        // }
        // loadContacts();
    };

    useEffect(() => {
        setChatrooms(cookies.rooms);
        connection();
    }, [])
    
    return(
        <main className={styles.chatMainInvisContainer}>

            <div className={styles.chatRooms}>
                {chatrooms.map((room) => <ChatroomBox>{room}</ChatroomBox >)
    } </div>

            <div className={styles.chatMessages}>
                <ChatWindow>

                    <MessagesWindow>
                        {messages}
                    </MessagesWindow > <Input.Group compact>
        <Input
            style={{
            width: '93%'
        }}
            placeholder='Type a message'
            onChange={handleMessageContentChange}
            onPressEnter={sendMessage}
            value={content}/>
        <Button
            style={{
            width: '7%'
        }}
            type="primary"
            onClick={sendMessage}
            allowClear={true}>Send</Button>
    </Input.Group> </ChatWindow>
            </div > </main>)
}