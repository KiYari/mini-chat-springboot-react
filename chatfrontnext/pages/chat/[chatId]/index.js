import React, { userState } from 'react';
import { useRouter } from 'next/router';
import InheritBox from '../../../components/box/InheritBox';
import Layout from '../../../layout/Layout';
import ChatComponent from "../../../components/chat/ChatComponent";
import useStyle from "antd/lib/config-provider/style";

export default function Chat() {
    const router = useRouter()
    const id = router.query.chatId

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
      
    return(
      <Layout>
          <InheritBox>
              <ChatComponent/>
          </InheritBox>
      </Layout>
    )
}