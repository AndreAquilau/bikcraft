import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { facebook, twitter, instagram } from '../../assets';

export default function RedeSocial() {
  return (
    <Container>
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
    </Container>
  );
}
