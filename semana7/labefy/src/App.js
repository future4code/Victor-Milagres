import React from "react";
import RegisterPlaylists  from "./components/RegisterPlaylists";
import  ListPlaylists  from "./components/ListPlaylists";
import style from 'styled-components'

const Container = style.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
font-size: 1.25em;
height: 100vh;

`


const Button = style.button `
    padding: 8px;
    margin-top: 16px;
    background: #2e7078;
    color: white;
    font-weight: bolder;
    border: none;
    cursor:pointer;
    margin: 0 auto;
    border-radius: 8px;
    margin-top: 30px;
`

export default class App extends React.Component {
  state = {
    page: true
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (

      <Container>
        <h1>LabeFy</h1>
        {this.state.page ? <RegisterPlaylists /> : <ListPlaylists />}
        <Button onClick={this.changePage}>Trocar de página</Button>
      </Container>
      
    );
  }
}
