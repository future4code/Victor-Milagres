import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 460px;
    background: white;
    color: black;
    transition: transform 100ms ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #eb3a34;
        transform: scale(1.05);
        color: white;
    }
`

export const DeleteButton = styled.button`
    padding: 10px;
    color: #eb3a34;
    &:hover{
        cursor: pointer;
        background-color: #d1e4ed;
        color: darkred;
    }
`