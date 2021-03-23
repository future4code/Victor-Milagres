import React from "react";
import styled from 'styled-components'

const Select = styled.select `
width: 200px;
padding: 8px;
`
export default function Opcoes(props) {
  return (
    <div>
      <p>{props.pergunta}</p>
      <Select>
        {props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
      </Select>
    </div>
  );
}