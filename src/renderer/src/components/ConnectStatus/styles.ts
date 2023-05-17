import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: inherit;
`;

export const Online = styled.div`
    background-color: green;
    height: 25px;
    width: 25px;
    border-radius: 50px;
`;

export const Offline = styled.div`
    background-color: gray;
    height: 25px;
    width: 25px;
    border-radius: 50px;
    box-shadow: 0px 0px 10px gray;
`;