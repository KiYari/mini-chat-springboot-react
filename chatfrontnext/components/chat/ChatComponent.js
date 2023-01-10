import React, {useEffect, useState} from 'react';
import styles from './chat.module.css'
import ChatroomBox from "./chatroombox/ChatroomBox";
import ChatWindow from "./chatWindow/ChatWindow";
import {
    Button,
    Input,
} from 'antd';
import MessagesWindow from "./chatWindow/messagesWindow/MessagesWindow";
import Message from "./chatWindow/messagesWindow/message/Message";

export default function ChatComponent() {
    const [chatrooms, setChatrooms] = useState(['room1'])
    const addRoom = () => {
        setChatrooms(...chatrooms, <ChatroomBox>new</ChatroomBox>)
    }


    const [content, setContent] = useState('');
    var message = {
        content: content,
    }

    const [messages, setMessages] = useState([])
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("pushed");
        if(message.content !== '') setMessages([...messages, <Message isMine={true}>{message.content}</Message>]);
        setContent('');
    }

    const handleMessageContentChange = (e) => {
        setContent(e.target.value);
    }
    
    return(
        <main className={styles.chatMainInvisContainer}>

            <div className={styles.chatRooms}>
                {chatrooms.map((room1) => <ChatroomBox>room</ChatroomBox>)}
            </div>

            <div className={styles.chatMessages}>
                <ChatWindow>

                    <MessagesWindow>
                        {messages}
                    </MessagesWindow>

                    <Input.Group compact>
                        <Input style={{ width: '93%' }}
                               placeholder='Type a message'
                                onChange={handleMessageContentChange}
                                onPressEnter={sendMessage}
                               value={content}/>
                        <Button
                            style={{ width: '7%' }}
                            type="primary"
                            onClick={sendMessage}
                            allowClear={true}>Send</Button>
                    </Input.Group>

                </ChatWindow>
            </div>
        </main>
    )
}