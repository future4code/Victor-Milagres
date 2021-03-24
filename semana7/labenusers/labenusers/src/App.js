import React  from 'react';
import axios from 'axios';
import style from 'styled-components'
import RegisterUser from './components/RegisterUser'

export default class App extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
  axios.get( 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
  {
    headers: {
      Authorization: 'victor-milagres'
    }
  }
)
    then((res) => {
      this.setState({users : res.data.result.list})
    })
    .catch((err) => {
      console.log(err.response.data);
    })
}

  createUsers = () => {
    const body = {
      name: 'Users'
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    body, 
    {
      headers: {
        Authorization: 'victor-milagres'
      }
    }
    ).then((res) => {
      console.log(res.data)
    })
  }

 render(){
   const listUsers = this.state.users.map((usuario) => <li key={usuario.id}>{usuario.name}</li>)
  return (
    <div className="App">
      <RegisterUser/>

      <ul>{listUsers}</ul>
    </div>
    );
  }
}

