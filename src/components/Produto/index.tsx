import React from 'react';
import { Container } from './styles';

import ProdutoInterface from '../../interface/Produto';

export default function Produto(props: ProdutoInterface): JSX.Element {
  const { backgroundImage, title, icon, text, image, qualidade } = props;
  return (
    <Container>
      <div className="header-produto">
        <div className="header-produto_title">
          <div className="header-produto_background">
            <img src={backgroundImage} alt="" />
          </div>
          <hr />
          <h1>{title}</h1>
          <hr />
        </div>
        <div className="header-produto_img">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="footer-produto">
        <div className="footer-produto_img">
          <img src={image} alt="" />
        </div>
        <div className="footer-produto_desc">
          <div className="produto-desc_text">
            <p>{text}</p>
          </div>
          <div className="produto-desc_qualidades">
            {qualidade.map((value, key) => {
              return <p key={key}>{value}</p>;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
