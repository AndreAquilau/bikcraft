import React, { useState } from 'react';
import { Container } from './styles';
import { logo } from '../../assets';
import { Link } from 'react-router-dom';

function HeaderConfig(props: { position: string; className?: string; display: string }): JSX.Element {
  return (
    <Container position={props.position} className={props.className} display={props.display}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="BikCraft" />
        </Link>
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-list_itens">
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className="menu-list_itens">
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className="menu-list_itens">
            <Link to="/portfólio">Portfólio</Link>
          </li>
          <li className="menu-list_itens">
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default function Header(): JSX.Element {
  const el = document.body as HTMLElement;

  const [getScroll, setScroll] = useState(false);
  if (el) {
    el.addEventListener('wheel', (e) => {
      setInterval(() => {
        setScroll(true);
      }, 3000);
    });
  }

  return (
    <>
      <HeaderConfig position="fixed" display={getScroll ? 'flex' : 'none'}></HeaderConfig>
      <HeaderConfig position="relative" display={!getScroll ? 'flex' : 'none'}></HeaderConfig>
    </>
  );
}
