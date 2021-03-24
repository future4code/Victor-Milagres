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
const Button = style.button `
    padding: 8px;
    margin-top: 16px;
    background: #f04c64;
    color: white;
    font-weight: bolder;
    border: none;
    cursor:pointer;
    margin-left: 50px;
    margin-bottom: 30px;
    
`
export class ListUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig)
      console.log(response.data)
      this.setState({users: response.data})
    } catch(error) {
      console.log(error)
    }
  }

  deleteUser = (id) => {
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then((res) => {
      this.getAllUsers()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <List>
        <h2>Lista de usuários</h2>
        {this.state.users.map((user) => {
          return (
            <div>
              <p>{user.name}</p>
              <Button onClick={() => {this.deleteUser(user.id)}}>X</Button>
            </div>
          )
        })}
      </List>
    );
  }
}