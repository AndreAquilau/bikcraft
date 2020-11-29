import React from 'react';
import { createLogicalAnd } from 'typescript';

import { Container } from './styles';

export default function MonteBikcraft(): JSX.Element {
  return (
    <Container>
      <h3>Monte a sua Bikcraft</h3>
      <h5>Escolha as especificações</h5>
      <ul>
        <li className="lite">- Cores</li>
        <li className="dark">- Estilo</li>
        <li className="lite">- Acessório</li>
        <li className="dark">- Medidas</li>
        <li className="lite">- E Outras</li>
      </ul>
    </Container>
  );
}
