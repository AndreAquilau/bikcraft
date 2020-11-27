import React from 'react';
import { Container } from './styles';
import { logo2 } from '../../assets';
export default function Qualidade(): JSX.Element {
  return (
    <Container className="qualidade">
      <div className="qualidade-header">
        <h3>Qualidade</h3>
      </div>
      <div className="qualidade-layout">
        <img className="box-logo" src={logo2} alt="logo" />
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <div className="qualidade-texto">
        <div className="qualidade-texto_1">
          <h3>Durabilidade</h3>
          <hr />
          <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
        </div>
        <div className="qualidade-texto_2">
          <h3>Design</h3>
          <hr />
          <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
        </div>
        <div className="qualidade-texto_3">
          <h3>Sustentabilidade</h3>
          <hr />
          <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
        </div>
      </div>
      <div className="qualidade-footer">
        <p>Conheça mais a história da Bikcraft</p>
        <button>Saiba Mais</button>
      </div>
    </Container>
  );
}
