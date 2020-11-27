import React from 'react';
import { Container } from './styles';

import { passeio2, passeio4, retro2 } from '../../assets';

export default function Portfolio(): JSX.Element {
  return (
    <Container className="portfolio">
      <h3>Portfólio</h3>
      <hr />
      <div className="portifolio-images">
        <div className="image1">
          <img src={retro2} alt="retro" />
        </div>
        <div className="image2">
          <img src={passeio4} alt="passeio" />
        </div>
        <div className="image3">
          <img src={passeio2} alt="passeio" />
        </div>
      </div>
      <p>Clique aqui e veja o nosso Portfólio</p>
      <button>Portfólio</button>
    </Container>
  );
}
