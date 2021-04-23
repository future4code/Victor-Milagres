import styled from "styled-components"


export const ContainerLogin = styled.div `
text-align: center;
 font-size: 30px;
 width: 30vw;
 height: 70vh;
 border: 1px solid #000;
 box-shadow: 3px 3px 3px 3px #000;
 border-radius: 10px;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

 h1{
     color: #000;
     margin-top: 10px;
}

`


export const Input = styled.input `
    width: 70%;
    height: 30px;
    border-radius: 10px;
    padding: 10px 8px;
    border-width: 2px;
    border-color: black;
    margin: 50px 0 15px 0;
  
`

export const ButtonsContainer = styled.div`
width: 400px;
display: flex;
justify-content:space-around;
`

export const Button = styled.button `
margin-bottom: 15px;
height: 30px;
width: 150px;
padding: 0 20px;
margin-left: 10px;
border-radius: 5px;
border: none;
color: white;
font-size: 16px;
background-color: #eb3a34;
margin-top: 30px;

:hover{
cursor: pointer;
background-color: #eba534;
}

`