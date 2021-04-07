import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl, axiosConfig } from './Parameters'
import style from 'styled-components';



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
   
    input {
        margin-left: 8px;
        padding: 5px;
        margin-top: 8px;
    }
`
export default class RegisterPlaylist extends React.Component {

    state = {
        inputPlaylist: '',
    }

    handleInputPlaylist = (event) => {
        this.setState({inputName: event.target.value})
      }


    createNewPlaylist = axios.post(baseUrl, body, axiosConfig)
    .then((res) => {
      alert("Usuário criado com sucesso!!")
      this.setState({inputPlaylist: ''})
    })
    .catch((err) => {
      alert("Erro: usuário não pode ser criado :(")
    })
  }

    render() {
        return (
            <FormContainer>
                <h2>Criar Playlist</h2>
                <input placeholder='Playlist' value={this.state.inputPlaylist} onChange={this.handleInputPlaylist} />
                <button onClick={this.createNewPlaylist}>Enviar</button>
            </FormContainer>
        )
    }
}