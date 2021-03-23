import React from 'react';
import Perguntas from './Perguntas';


class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <Perguntas pergunta={"5. Qual curso?"} />
        <Perguntas pergunta={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;