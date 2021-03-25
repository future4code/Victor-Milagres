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



export default class PokeApi extends React.Component {
  state={
    listaPokemons: [],
    imagemPokemon: ''
  }

  componentDidMount() {
    this.getListPokemon();
  }

  getListPokemon = () =>{
    axios.get( "https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((resposta) => this.setState({listaPokemons: resposta.data.results})
    )
    .catch((erro)=> console.log(erro));
  }

  GetImagePokemon = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((resposta) => this.setState({imagemPokemon: resposta.data.sprites.front_default}))
    .catch((erro) => console.log(erro))
  }

  changeSelect = (event) => {
    const namePokemon = event.target.value
    this.GetImagePokemon(namePokemon)
  }
  render() {
   
    return (
      <DivContainer>
        <h1>PokeApi</h1>
        <select onChange={this.changeSelect}>
          <option value={""}></option>
          {this.state.listaPokemons.map((pokemon)=> {
            return (
            <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
            </option>)
          })}
        </select>
        <div>
        {this.state.imagemPokemon &&(<img alt={'imagem_pokemon'} src={this.state.imagemPokemon}/>)}
      </div>
      </DivContainer>
      
    );
  }
}