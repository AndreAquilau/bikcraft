import styled from 'styled-components';
import {
  passeio2,
  passeio4,
  retro2,
  retro3,
  retro,
  passeio,
  passeio3,
  passeio1,
  esporte1,
  esporte,
  esporte2,
} from '../../assets';

export const Container = styled.div`
  .intro-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    background: url(${passeio4}) 100% 100%/ 100% 100% fixed no-repeat;
    background-position: 0px -250px;

    background-color: #fff;
    h1 {
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
    }

    hr {
      border: 0;
      width: 60px;
      border-top: 3px solid #fff;
    }

    p {
      color: #fff;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  }
`;
