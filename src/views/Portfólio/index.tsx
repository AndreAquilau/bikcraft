import React, { useState } from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contatos from '../../components/Contatos';
import Message from '../../components/Message';
import {
  passeio2,
  passeio4,
  retro2,
  retro3,
  retro,
  passeio,
  passeio3,
  passeio1,
  esporte1,
  esporte,
  esporte2,
} from '../../assets';
export default function Portfolio(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <div className="intro-portfolio">
        <h1>PORTFÓLIO</h1>
        <hr />
        <p>conheça os projetos que amamos mostrar</p>
      </div>
      <div className="content-text">
        <p>
          "No mundo atual, a continua expansão de nossa atividade cumpre um papel essencial na formulação da gestão
          inovadora de qual fazemos parte."
        </p>
        <h5>Baraba Mass</h5>
      </div>

      <div className="portifolio-images">
        <div className="image1">{<img src={retro2} alt="retro" />}</div>
        <div className="image2">{<img src={passeio4} alt="passeio" />}</div>
        <div className="image3">{<img src={passeio2} alt="passeio" />}</div>
        <div className="box">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
        </div>
      </div>

      <Message></Message>
      <Contatos></Contatos>
      <Footer></Footer>
    </Container>
  );
}
