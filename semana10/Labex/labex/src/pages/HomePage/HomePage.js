import React from 'react'
import { ButtonsContainer } from "./style.js"
import { Button } from "./style.js"
import { ContainerHome } from "./style.js"
import foguete from "../../assets/foguete1.png"
import { goToListTripsPage, goToLoginPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const history = useHistory()
    return (
        <ContainerHome>
            <h1>LabeX</h1>
            <p>Encontre as melhores viagens espaciais!</p>
            <img src={foguete}></img>
            <ButtonsContainer>
                <Button onClick={() => goToListTripsPage(history)}>Quero Viajar!</Button>
                <Button onClick={() => goToLoginPage(history)}>Login</Button>
            </ButtonsContainer>
        </ContainerHome>
    )
}

export default HomePage;
