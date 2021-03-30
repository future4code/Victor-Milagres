import React from 'react';
import axios from 'axios';
import {baseUrl, axiosConfig} from './Parameters'
import style from 'styled-components'

const FormContainer = style.div `
    width: 300px;
    height: 200px;
    border: solid 1px #000;
    margin: 0 auto;
    display: flex;
    align-itens: center;
    flex-direction: column;
    padding: 30px;
    margin-top: 50px;
    div {
        margin-bottom: 15px;
        padding: 12px;
    }
    input {
        margin-left: 8px;
        padding: 5px;
        margin-top: 8px;
    }
`
const Button = style.button `
    padding: 8px;
    margin-top: 16px;
    background: #f04c64;
    color: white;
    font-weight: bolder;
    border: none;
    cursor:pointer;
`


export class PageRegister extends React.Component {
  state = {
    inputName: '',
    inputEmail: ''
  }

  handleInputName = (event) => {
    this.setState({inputName: event.target.value})
  }
  
  handleInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post(baseUrl, body, axiosConfig)
    .then((res) => {
      alert("Usuário criado com sucesso!!")
      this.setState({inputName: '', inputEmail: ''})
    })
    .catch((err) => {
      alert("Erro: usuário não pode ser criado :(")
    })
  }

  render() {
    return (
      <FormContainer>
        <h2>Cadastro</h2>
        <input placeholder='Nome' value={this.state.inputName} onChange={this.handleInputName} />
        <input placeholder='E-mail' value={this.state.inputEmail} onChange={this.handleInputEmail} />
        <Button onClick={this.createUser}>Cadastrar</Button>
      </FormContainer>
    )
  }
}