import React, { useEffect, useState } from 'react';
import { Container, LabelContainer, LabelOne, LabelThree, LabelTwo, LogLevelContainer, Logs } from './styles';
import { LogLevelColor } from '../../utils/logLevelColor';
import { NavBar } from 'renderer/src/components/NavBar';
import { socket } from 'renderer/src/services/websocket';
import { FloatingNavigator } from 'renderer/src/components/FloatingNavigator';
import { Counter } from 'renderer/src/components/Counter';
import { DateConverter } from 'renderer/src/utils/dateConverter';
import { JsonFormatter } from 'renderer/src/components/JsonFormatter';

type Home = {
    logLevel: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
    date: number;
    value: object;
}

export const HomePage = () => {
    const [value, setValue] = useState<Array<Home>>([]);

    useEffect(() => {
        socket.on('message', (args) => {
            setValue([...value, {
                logLevel: args[0],
                value: args[1],
                date: Number(new Date(args[2])),
            }]);
        });
    }, [socket, value]);

    const handleClean = () => setValue([]);

    return (
        <Container>
            <NavBar />
            <FloatingNavigator
                buttonOne={handleClean}
            />
            <Counter title={value.length.toString()} />
            <Logs>
                {value ? value.sort((a, b) => b.date - a.date).map((e, i) => (
                        <LogLevelContainer key={i}>
                            <LabelContainer>
                                <LabelOne logLevelColor={LogLevelColor(e.logLevel)}>{e.logLevel.toLocaleUpperCase()}</LabelOne>
                                <LabelTwo>{DateConverter(e.date)}</LabelTwo>
                            </LabelContainer>

                            <JsonFormatter json={e.value} />
                        </LogLevelContainer>
                    )) : 
                <div style={{
                    position: 'absolute',
                    textAlign: 'center',
                    justifyContent: 'center'
                }}>
                    <h1>Logs Vázios</h1>
                </div>}
            </Logs>
        </Container>
    )
}