import styled from "styled-components"

export const TripDataContainer = styled.div`
    padding: 10px 20px;
    border-radius: 4px;
    margin: 15px 0;
    max-width: 500px;
`

export const TripContainer = styled.div`
text-align: center;
 font-size: 20px;
 width: 50vw;
 height: 150vh;
 border: 1px solid #000;
 box-shadow: 3px 3px 3px 3px #000;
 border-radius: 10px;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 color: black;

 h1{
     color: #000;
     margin-top: 10px;
     font-size: 20px;
}

h2{
    font-size: 20px;
    margin-bottom: 10px;
}

p{
    font-size: 18px;
    margin-bottom: 10px;
}

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