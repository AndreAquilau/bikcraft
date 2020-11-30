import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Message from '../../components/Message';
import Contatos from '../../components/Contatos';
import Footer from '../../components/Footer';
import Orcamento from '../../components/Orcamento';
import RedeSocial from '../../components/RedeSocial';

export default function Contato(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <div className="intro-contato">
        <h1>CONTATO</h1>
        <hr />
        <p>tire suas dúvidas com a gente</p>
      </div>
      <Orcamento background="#fff" el={RedeSocial()}></Orcamento>
      <Message></Message>
      <Contatos></Contatos>
      <Footer></Footer>
    </Container>
  );
}
