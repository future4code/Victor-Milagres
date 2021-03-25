import React from "react";
import axios from "axios";
import style from "styled-components"



const DivContainer = style.div `
text-align: center;
font-weight: bold;

p {
    padding: 8px;
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
    margin-bottom: 30px;
    
`

export default class BoredApi extends React.Component {
  state = {
    activity: {}
  };

  getActivity = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        console.log(res.data);
        this.setState({ activity: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const { activity, type, price, participants } = this.state.activity;
    return (
      <DivContainer>
        <h1>Está entediado? </h1>
        <Button onClick={this.getActivity}>Clique aqui!</Button>
        <hr />
        <p>Atividade: {activity} </p>
        <p>Participantes: {participants}</p>
        <p>Preço: {price}</p>
        <p>Tipo: {type}</p>
        <hr />
      </DivContainer>
    );
  }
}