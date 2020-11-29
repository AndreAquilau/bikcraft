import React, { cloneElement } from 'react';
import { Container } from './styles';
import OrcamentoInterface from '../../interface/Orcamento';
export default function Orcamento(props: OrcamentoInterface): JSX.Element {
  return (
    <Container background={props.background}>
      <div className="orcamento-header">
        <h1>Orçamento</h1>
        <hr />
      </div>
      <div className="orcamento-body">
        <form id="orcamento-body_formulario">
          <div className="input-content">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite seu nome..." />
          </div>
          <div className="input-content">
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="Digite seu email..." />
          </div>
          <div className="input-content">
            <label htmlFor="">Telefone</label>
            <input type="text" placeholder="Digite seu telefone..." />
          </div>
          <div className="message-content">
            <label htmlFor="">Message</label>
            <textarea
              name="message-orcamento"
              id=""
              cols={0}
              rows={0}
              placeholder="Comprar Bicicletas na Black Friday ✓ Descontos de até 70% ✓ Em até 30x sem juros no Cartão Casas Bahia** ✓ As Melhores Ofertas da Black Friday é na ..."
            ></textarea>
          </div>
          <div className="orsamento-btn">
            <button>Enviar</button>
          </div>
        </form>
        <div className="orcamento-body_dados">
          <div className="info-contato">
            <h3>DADOS</h3>
            <p>+55 21 (99)9999-9999</p>
            <p>orçamento@bicraft.com</p>
            <div>{cloneElement(props.el as React.ReactElement, props)}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
