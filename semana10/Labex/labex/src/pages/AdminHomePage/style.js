import styled from "styled-components"

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
`

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;

h1{
    margin-top: 50px;
}
`

export const Button = styled.button `
    margin-bottom: 15px;
    height: 60px;
    width: 100px;
    padding: 0 20px;
    margin-right: 20px;
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