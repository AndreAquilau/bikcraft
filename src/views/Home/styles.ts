import styled from 'styled-components';
import { mesaTrabalho } from '../../assets';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  .intro-home {
    display: flex;
    flex-direction: column;
    height: 333px;
    width: 100vw;
    align-items: center;
    justify-content: center;
    animation: intro-animation-home 1s;
    background: url(${mesaTrabalho}) 100% 100% / 100% 100% no-repeat fixed;

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

  @keyframes intro-animation-home {
    from {
      transform: translateY(-333px);
      z-index: -1;
    }
    to {
      transform: translateY(0px);
      z-index: -1;
    }
  }
`;
