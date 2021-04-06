import React from "react";
import axios from 'axios'
import { baseUrl, axiosConfig } from './Parameters'
import style from 'styled-components'
const FormContainer = style.div `
    width: 300px;
    height: 200px;
    border: solid 1px #000;
    margin: 0 auto;
    display: flex;
    text-align: center;
    align-itens: center;
    flex-direction: column;
    padding: 30px;
    margin-top: 50px;
    input {
        margin-left: 8px;
        padding: 8px;
        margin-top: 8px;
    }
`
const Button = style.button `
    padding: 8px;
    margin-top: 16px;
    background: #2e7078;
    color: white;
    font-weight: bolder;
    border: none;
    cursor:pointer;
    border-radius: 8px;
`
export default class RegisterPlaylists extends React.Component {
    state = {
      inputPlaylist: ''
     
    }
  
    handleInputPlaylist = (event) => {
      this.setState({inputPlaylist: event.target.value})
    }
    
  
    createPlaylist = () => {
      const body = {
        name: this.state.inputPlaylist,
      }
  
      axios.post(baseUrl, body, axiosConfig)
      .then((res) => {
        alert("Playlist criada com sucesso!!")
        this.setState({inputPlaylist: ''})
      })
      .catch((err) => {
        alert("Playlist não foi criada corretamente. Tente Novamente! 😉")
      })
    }
  
    render() {
      return (
        <FormContainer>
          <h2>Playlists</h2>
          <input placeholder='Playlists' value={this.state.inputPlaylist} onChange={this.handleInputPlaylist} />
          <Button onClick={this.createPlaylist}>Enviar</Button>
        </FormContainer>
      )
    }
  }