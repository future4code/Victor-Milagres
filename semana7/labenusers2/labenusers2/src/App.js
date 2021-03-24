import React from "react";
import { PageRegister } from "./components/PageRegister";
import { ListUsers } from "./components/ListUsers";
import style from 'styled-components'

const Container = style.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
font-size: 1.25em;
`


const Button = style.button `
    padding: 8px;
    margin-top: 16px;
    background: #f04c64;
    color: white;
    font-weight: bolder;
    border: none;
    cursor:pointer;
    margin: 0 auto;
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
        <h1>Labenusers</h1>
        {this.state.page ? <PageRegister /> : <ListUsers />}
        <Button onClick={this.changePage}>Troca de página</Button>
      </Container>
    );
  }
}