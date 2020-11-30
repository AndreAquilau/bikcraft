import React, { useState } from 'react';
import { Container } from './styles';
import { logo } from '../../assets';
import { Link } from 'react-router-dom';

export default function Header(props: { className?: string }): JSX.Element {
  return (
    <Container>
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
