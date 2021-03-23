import React from 'react';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const AppContainer = styled.div `
text-align: center;
background-color: #6434eb;
height: 100vh;
`
const Button = styled.button `
background-color: white;
width: 200px;
padding: 18px;
font-weight: bold;
border: none;
`
export default class App extends React.Component{
state = {
  etapa: 1
}

renderizaEtapa = () => {
  switch (this.state.etapa) {
    case 1:
      return <Etapa1/>;
    case 2:
      return <Etapa2/>;
    case 3:
      return <Etapa3/>;
    case 4:
      return <Final/>;
    default:
      return <Final/>;
  }
};

proximaEtapa = () => {
  this.setState({ etapa: this.state.etapa + 1 });
};

render () {
  return(
    <AppContainer>
       {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <Button onClick={this.proximaEtapa}>Próxima etapa</Button>
        )}
    </AppContainer>
  )
  }
}