import InheritBox from '../box/InheritBox';
import styles from './rooms.module.css';
import Room from '../chat/chatroombox/ChatroomBox'
import ChatroomBox from '../chat/chatroombox/ChatroomBox';
import { useState } from 'react';

export default function App() {
    const [roomsAvailable, setRoomsAvailable] = useState(['room1'])


    return(
        <InheritBox>
            {roomsAvailable.map((room) => <ChatroomBox>
                {room}
            </ChatroomBox>)}
        </InheritBox>
    )
}