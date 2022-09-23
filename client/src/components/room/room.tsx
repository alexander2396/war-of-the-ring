import { useState } from 'react';
import { getSocket } from '../../redux/game/gameSlice';
import { useAppSelector } from '../../tools/hooks/hooks';
import styles from './Room.module.css';

export function Room() {
    const [Messages, setMessages]=useState([]);

    const socket = useAppSelector(getSocket);

    socket.on('room-message', (message) => {
        setMessages([message, ...Messages])
    });

    socket.on('user-leaved', (message) => {
        setMessages([message, ...Messages])
    });

    return (
    <>
    <div className={styles.room}>
        {
            Messages.map(x => {
                return (
                <>
                    <div>&gt; {x}</div>
                </>
                )
            })
        }
    </div>
    </>
    );
}