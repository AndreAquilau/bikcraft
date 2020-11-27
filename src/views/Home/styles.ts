import styled from 'styled-components';
import { mesaTrabalho } from '../../assets';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .intro-home {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    height: 333px;
    align-items: center;
    justify-content: center;
    background: url(${mesaTrabalho}) 100% 100% / 100% 100% no-repeat fixed;
    margin-bottom: 4%;

    text-align: center;

    h1 {
      text-transform: uppercase;
      color: #ffffff;
      font-weight: bold;
      font-size: 1.5rem;
    }

    hr {
      width: 60px;
      border: 0;
      border-top: 1px solid #ffffff;
      height: 1px;
    }

    p {
      font-style: italic;
      color: #ffffff;
    }

    h5 {
      text-transform: uppercase;
      color: #ffffff;
      font-weight: normal;
      font-style: italic;
    }

    button {
      border: 4px solid #fec63e;
      text-transform: uppercase;
      color: #fec63e;
      font-weight: bold;
      padding: 1% 2%;
      margin-top: 2%;
      cursor: pointer;
    }
  }

  .home-catalogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //position: relative;
    top: 50px;
    h3 {
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
    }

    hr {
      border: 0;
      border-top: 2px solid #000;
      width: 60px;
      margin-bottom: 5%;
    }

    button {
      width: 140px;
      border: 4px solid #fec63e;
      text-transform: uppercase;
      color: #fec63e;
      font-weight: bold;
      padding: 1% 2%;
      margin-top: 2%;
      cursor: pointer;
    }
  }

  .home-catalogo_itens {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5%;
  }
`;
