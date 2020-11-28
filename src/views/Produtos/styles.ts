import styled from 'styled-components';
import { esporte1 } from '../../assets';
export const Container = styled.div`
  .intro-produto {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    background: url(${esporte1}) 100% 100%/ 100% 100% fixed no-repeat;
    background-position: 0px -300px;

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
