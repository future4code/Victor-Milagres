import styled from "styled-components"

export const CardContainer = styled.div`
    box-shadow: 3px 4px 8px 3px rgba(0,0,0,1);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    max-width: 500px;
    width: 100%;
    background: white;
    color: black;
    transition: transform 100ms ease-in-out;
    font-family: 'Ubuntu', sans-serif;

    :hover{
        background: #eb3a34; 
        transform: scale(1.05);
        cursor: pointer;
        color: white;
    }

`