import styled from "styled-components"


export const Titulo = styled.div `
 text-align: center;
 margin-bottom: 50px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 800px;
    margin: 50px  10px;
`

export const ListContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
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