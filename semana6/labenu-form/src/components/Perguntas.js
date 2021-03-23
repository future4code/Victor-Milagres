import React from 'react';
import styled from 'styled-components'

const Input = styled.input `
width: 200px;
padding: 8px;
`
export default function Perguntas(props) {
  return (
    <div>
      <p>{props.pergunta}</p>
      <Input onChange={props.onChange} value={props.value} />
    </div>
  );
}
