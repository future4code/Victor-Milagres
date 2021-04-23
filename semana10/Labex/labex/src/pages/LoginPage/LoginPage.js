import React from 'react'
import {ContainerLogin, Button, Input, ButtonsContainer} from "./style.js"
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'
import useForm from "../../hooks/useForm"
import { login } from "../../services/requests"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'





const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    const { form, onChange } = useForm({ email: "", password: "" })

    const onClickLogin = (e) => {
        e.preventDefault()
        login(form, history)
    }
    return (
        <ContainerLogin>
            <h1>Login</h1>
            <form onSubmit={onClickLogin}>
                
                <Input
                      placeholder={"E-mail"}
                      type={"email"}
                      name={"email"}
                      value={form.email}
                      onChange={onChange}
                      required
                />
                <Input
                     placeholder={"Senha"}
                     type={"password"}
                     name={"password"}
                     value={form.password}
                     onChange={onChange}
                     required
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