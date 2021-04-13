import styled from "styled-components"


export const ContainerHome = styled.div `
 text-align: center;
 font-size: 50px;
 max-width: 800px;

 p {
     font-size: 20px;
     margin-top: 20px;
 }

 img { padding-top: 50px;}
`

export const ButtonsContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
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