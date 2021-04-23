import styled from "styled-components"


export const ContainerHome = styled.div `
 text-align: center;
 font-size: 50px;
 max-width: 800px;
 
 h1:hover{
     color:#eb3a34;
 }

 p {
     font-size: 20px;
     margin-top: 20px;
 }

 p:hover{
    color:#eb3a34;
 }

 img { padding-top: 70px;}
`

export const ButtonsContainer = styled.div`
    width: 600px;
    display: flex;
    justify-content: space-around;
`

export const Button = styled.button `
    margin-bottom: 15px;
    height: 60px;
    width: 200px;
    padding: 0 20px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: #eb3a34;
    margin-top: 80px;

    :hover{
    cursor: pointer;
    background-color: #eba534;
    }

`