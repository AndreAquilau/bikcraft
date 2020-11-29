import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Produto from '../../components/Produto';

import { passeio, passeio4, passeio1, esporte4, esporte, esporte2, retro2, retro, retro3 } from '../../assets';
import Message from '../../components/Message';
import Contatos from '../../components/Contatos';
import Footer from '../../components/Footer';
import Orcamento from '../../components/Orcamento';
import MonteBikcraft from '../../components/MonteBikcraft';

export default function Produtos(): JSX.Element {
  return (
    <Container>
      {<Header></Header>}
      <div className="intro-produto">
        <h1>PRODUTOS</h1>
        <hr />
        <p>Conheça mais nossos produtos</p>
      </div>
      <Produto
        title="PASSEIO"
        backgroundImage={passeio1}
        icon={passeio}
        image={passeio4}
        text="Bicicleta Com o Menor Preço e Melhores Ofertas Estão No Zoom. Acesse e compre apenas em lojas confiáveis. Compare ofertas e economize!"
        qualidade={['Conforto', 'Velocidade', 'Design', 'Versatilidade']}
      ></Produto>
      <Produto
        title="ESPORTE"
        backgroundImage={esporte4}
        icon={esporte}
        image={esporte2}
        text="Bicicleta Com o Menor Preço e Melhores Ofertas Estão No Zoom. Acesse e compre apenas em lojas confiáveis. Compare ofertas e economize!"
        qualidade={['Conforto', 'Velocidade', 'Design', 'Versatilidade']}
      ></Produto>
      <Produto
        title="RETRO"
        backgroundImage={retro2}
        icon={retro}
        image={retro3}
        text="Bicicleta Com o Menor Preço e Melhores Ofertas Estão No Zoom. Acesse e compre apenas em lojas confiáveis. Compare ofertas e economize!"
        qualidade={['Conforto', 'Velocidade', 'Design', 'Versatilidade']}
      ></Produto>
      <Orcamento el={MonteBikcraft()} background={'#000'}></Orcamento>
      <Message></Message>
      <Contatos></Contatos>
      <Footer></Footer>
    </Container>
  );
}
