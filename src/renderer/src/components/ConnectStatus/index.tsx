import { useEffect, useState } from 'react';
import { Container, Offline, Online } from './styles';
import { socket } from 'renderer/src/services/websocket';

export const ConnectStatus = () => {
    const [status, setStatus] = useState<boolean>();

    useEffect(() => {
        socket.on('connect', () => {
            setStatus(true);
          });
          
          socket.on('disconnect', () => {
            setStatus(false);
          });
    }, []);

    return (
        <Container>
            {status ? <Online /> : <Offline />}
        </Container>
    );
}