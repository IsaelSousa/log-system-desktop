import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100vh;
`;

export const Logs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
`;

export const LogLevelContainer = styled.div`
    margin-top: 1rem;
    border-radius: 10px;
    flex-direction: column;

    width: 80%;
    color: white;

    border-top: 2px solid #007cd5;
    border-bottom: 2px solid #007cd5;

    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    font-size: 18pt;
`;

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: inherit;
`;

type LabelOneProps = {
    logLevelColor: string;
}

export const LabelOne = styled.div<LabelOneProps>`
    background: ${props => props.logLevelColor};
    width: 60px;
    height: 30px;
    font-size: 10pt;
    font-family: sans-serif;
    font-weight: bold;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const LabelTwo = styled.div`
    background: inherit;
    font-size: 12pt;
    font-weight: bold;
    color: #003a63;
`;

export const LabelThree = styled.p`
    background: inherit;
    margin-top: 1rem;
    font-size: 12pt;
    text-align: left;
    color: orange;
`;