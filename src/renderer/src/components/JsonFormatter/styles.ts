import styled from 'styled-components';

export const Container = styled.div`
    background: inherit;
    margin-top: 1rem;
    font-size: 12pt;
    text-align: left;
    color: yellow;
`;

export const Active = styled.button`
    display: flex;
    cursor: pointer;
    padding: 4px;
    border: none;
    background-color: #c77a00;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
`;

export const Copy = styled.button`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
    font-weight: bold;
    color: black;
    cursor: pointer;

    &:hover {
        background: gray;
        color: black;
        font-weight: bold;
    }
`;