import React from 'react';
import { Container } from './styles';

// Imports Components
import Header from '../../components/Header';
import Catalogo from '../../components/Catalogo';
import { esporte, passeio, retro } from '../../assets';
import Portfolio from '../../components/Portfolio';
import Qualidade from '../../components/Qualidade';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header></Header>
      <div className="intro-home">
        <h1>Bicicletas Feitas a Mão</h1>
        <hr />
        <p>"não tenha nada em sua casa que você não considere útil ou acredita ser bonito"</p>
        <hr />
        <h5>William Morris</h5>
        <button>Orçamento</button>
      </div>
      <div className="home-catalogo">
        <h3>Produtos</h3>
        <hr />
        <div className="home-catalogo_itens">
          <Catalogo
            image={passeio}
            title="Passeio"
            text="Ao contrário das bicicletas utilizadas para o ciclismo de estrada e de pista, que são bastante leves e com pneus muito finos."
          ></Catalogo>
          <Catalogo
            image={esporte}
            title="Esporte"
            text="Ao contrário das bicicletas utilizadas para o ciclismo de estrada e de pista, que são bastante leves e com pneus muito finos."
          ></Catalogo>
          <Catalogo
            image={retro}
            title="Retro"
            text="Ao contrário das bicicletas utilizadas para o ciclismo de estrada e de pista, que são bastante leves e com pneus muito finos."
          ></Catalogo>
        </div>
        <p>Clique aqui e veja os detalhes dos produtos</p>
        <button>Produtos</button>
      </div>
      <Portfolio></Portfolio>
      <Qualidade></Qualidade>
    </Container>
  );
}
