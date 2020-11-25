import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <div className="intro-home">
        <h1>Bicicletas Feitas a Mão</h1>
        <hr />
        <p>"não tenha nada em sua casa que você não considere útil ou acredita ser bonito"</p>
        <hr />
        <h5>William Morris</h5>
        <button>Orçamento</button>
      </div>
    </Container>
  );
}
