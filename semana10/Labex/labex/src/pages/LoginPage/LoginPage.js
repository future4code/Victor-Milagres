import React from 'react'
import { ButtonsContainer } from "./style.js"
import { Button } from "./style.js"
import {Input} from "./style.js"
import {ContainerLogin} from "./style.js"
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'





const LoginPage = () => {
    const history = useHistory()
    return (
        <ContainerLogin>
            <h1>Login</h1>
            <form>
                <Input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                />
                <Input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                />
                <ButtonsContainer>
                    <Button onClick={() => goToHomePage(history)}>Home</Button>
                    <Button type={"submit"}>Entrar</Button>
                </ButtonsContainer>
            </form>
            </ContainerLogin>
    )
}

export default LoginPage;