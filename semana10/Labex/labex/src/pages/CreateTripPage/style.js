import styled from "styled-components"

export const Container = styled.div`
 text-align: center;
 font-size: 15px;
 width: 40vw;
 height: 85vh;
 border: 1px solid #000;
 box-shadow: 3px 3px 3px 3px #000;
 border-radius: 10px;
 background-color: white;

 h1{
     color: #000;
     margin-top: 10px;
     margin-bottom: 20px;
}

`
export const Form = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 600px;
    margin: 10px 0;
    align-items: center;
`

export const Input = styled.input `
    width: 70%;
    height: 40px;
    border-radius: 10px;
    padding: 10px 8px;
    border-width: 2px;
    border-color: black;
    margin: 10px 0 15px 0;
  
`

export const Select = styled.select `
    width: 70%;
    height: 40px;
    border-radius: 10px;
    padding: 10px 8px;
    border-width: 2px;
    border-color: black;
    margin: 10px 0 15px 0;
  
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