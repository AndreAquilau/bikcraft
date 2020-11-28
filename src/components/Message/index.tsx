import React from 'react';

import { Container } from './styles';
import { esporte3 } from '../../assets';

export default function Message(): JSX.Element {
  return (
    <Container>
      <div className="text">
        <p className="text-itens">
          "O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os da vida cotidiana"
        </p>
        <hr className="text-itens" />
        <h3 className="text-itens">WILLIAM MORRIS</h3>
      </div>

      <div className="filter"></div>
      <img src={esporte3} alt="" />
    </Container>
  );
}
