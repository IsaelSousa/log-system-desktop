import { useRef, useState } from 'react';
import { Active, Container, Copy } from './styles';

type JsonFormatterType = {
    json: any
}

export const JsonFormatter = ({
    json
}: JsonFormatterType) => {
    const [active, setActive] = useState<boolean>(false);

    const handleButton = () => {
        setActive(!active);
    }

    const handleClipboard = (value: string) => {
        navigator.clipboard.writeText(value);
    }

    return (
        <Container>
            <Active onClick={handleButton}>Json</Active>
            {active ? 
                <pre style={{
                    background: 'black',
                    padding: '10px',
                    borderRadius: '20px',
                    fontSize: '10pt',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'end',
                        background: 'inherit'
                    }} >
                        <Copy onClick={() => handleClipboard(JSON.stringify(json, null, 2))}>Copy</Copy>
                    </div>
                    {JSON.stringify(json, null, 2)}    
                </pre>
                : <></> }            
        </Container>
    );
}