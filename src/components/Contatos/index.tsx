import React from 'react';
import { Link } from 'react-router-dom';
import RedeSocial from '../RedeSocial';
import { Container } from './styles';

export default function Contatos(): JSX.Element {
  return (
    <Container>
      <div className="historia">
        <h3>Nossa História</h3>
        <hr />
        <p>"O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os da vida cotidiana".</p>
      </div>
      <div className="contato">
        <h3>Contato</h3>
        <hr />
        <p>- 21 9999-9999</p>
        <p>contato@bikcraft.com</p>
        <p>- Botafogo - RJ</p>
      </div>
      <RedeSocial></RedeSocial>
    </Container>
  );
}
