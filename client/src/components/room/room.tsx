import { useState } from 'react';
import { selectGame, getSocket } from '../../redux/game/gameSlice';
import { useAppSelector, useAppDispatch } from '../../tools/hooks/hooks';
import styles from './Room.module.css';

export function Room() {
    const gameSlice = useAppSelector(selectGame);
    const dispatch = useAppDispatch();
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