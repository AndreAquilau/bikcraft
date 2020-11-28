import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contatos from '../../components/Contatos';
import Qualidade from '../../components/Qualidade';

export default function Sobre(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <div className="intro-sobre">
        <h1>Sobre</h1>
        <hr />
        <p>Conheça mais sobre bikcraft</p>
      </div>

      <div className="content">
        <div className="historia">
          <h1>História, Missão e Visão</h1>
          <hr />
          <p>
            Missão: É o propósito de a empresa existir. ... Visão: É a situação em que a empresa deseja chegar (em
            período definido de tempo). Valores: são os ideais de atitude, comportamento e resultados que devem estar
            presentes nos colaboradores e nas relações da empresa com seus clientes, fornecedores e parceiros.
          </p>
        </div>
        <div className="valores">
          <h1>Valores</h1>
          <hr />
          <p>
            Missão: É o propósito de a empresa existir. ... Visão: É a situação em que a empresa deseja chegar (em
            período definido de tempo). Valores: são os ideais de atitude, comportamento e resultados que devem estar
            presentes nos colaboradores e nas relações da empresa com seus clientes, fornecedores e parceiros.
          </p>
        </div>
      </div>

      <div className="content-photo"></div>
      <Qualidade></Qualidade>
      <Contatos></Contatos>
      <Footer></Footer>
    </Container>
  );
}
