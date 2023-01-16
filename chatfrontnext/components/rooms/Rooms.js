import InheritBox from '../box/InheritBox';
import styles from './rooms.module.css';
import Room from '../chat/chatroombox/ChatroomBox'
import ChatroomBox from '../chat/chatroombox/ChatroomBox';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function App() {
    const [roomsAvailable, setRoomsAvailable] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies(['rooms'])

    useEffect(() => {
        setRoomsAvailable(cookies.rooms);
    }, [])

    return(
        <InheritBox>
            {roomsAvailable.map((room) => <ChatroomBox isHere={false}>
                {room}
            </ChatroomBox>)}
        </InheritBox>
    )
}