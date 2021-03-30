import React from "react";
import axios from 'axios'
import { baseUrl, axiosConfig } from './Parameters'
import style from 'styled-components'

const List = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`
const Playlists = style.div `
display: flex;
align-itens: center;
`
const Button = style.button `
    padding: 8px;
    margin-top: 16px;
    background: #2e7078;
    color: white;
    font-weight: bolder;
    border: none;
    cursor:pointer;
    margin-bottom: 30px;
    margin-left: 50px;
    border-radius: 8px;
    
`
export default class ListPlaylist extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.getAllPlaylists()
  }

  getAllPlaylists = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig)
      console.log(response.data)
      this.setState({playlists: response.data.result.list})
    } catch(error) {
      console.log(error)
    }
  }

  deletePlaylist = (id) => {
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then((res) => {
      this.getAllPlaylists()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <List>
        <h2>Suas Playlists</h2>
        {this.state.playlists.map((play) => {
          return (
            <Playlists>
              <p>{play.name}</p>
              <Button onClick={() => {this.deletePlaylist(play.id)}}>Delete</Button>
            </Playlists>

            
          )
        })}
      </List>
    );
  }
}