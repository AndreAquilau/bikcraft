import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { facebook, twitter, instagram } from '../../assets';

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
      <div className="redesocial">
        <h3>Rede Sociais</h3>
        <hr />
        <div>
          <Link className="link" to="/">
            <img src={instagram} alt="instagram" />
          </Link>
          <Link className="link" to="/">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link className="link" to="/">
            <img src={facebook} alt="facebook" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
