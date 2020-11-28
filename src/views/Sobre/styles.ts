import styled from 'styled-components';
import { esporte2, passeio3 } from '../../assets';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .intro-sobre {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    background: url(${esporte2}) 100% 100%/ 100% 100% fixed no-repeat;
    background-position: 0px -350px;

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

  .content {
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    div {
      width: 45%;
    }

    h1 {
      font-weight: bold;
      font-size: 1.5rem;
    }

    hr {
      border: 0;
      width: 60px;
      border-top: 3px solid #000;
      float: left;
    }

    p {
      float: left;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  }

  .content-photo {
    width: 100;
    height: 230px;
    display: flex;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    background: url(${passeio3}) 300% 200%/ 100% 100% local no-repeat;
    zoom: 1.6;
  }
`;
