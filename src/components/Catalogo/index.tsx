import React from 'react';
import { Container } from './styles';
import CatalogoInterface from '../../interface/Catalogo';
export default function Catalogo(props: CatalogoInterface): JSX.Element {
  const { image, text, title } = props;
  return (
    <Container className="catalogo">
      <div className="catalogo-header">
        <img src={image} alt="logo" />
      </div>
      <div className="catalogo-body">
        <h3>{title}</h3>
        <hr />
        <p>{text}</p>
      </div>
    </Container>
  );
}
