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
  .intro-portfolio {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    background: url(${retro3}) 100% 100%/ 100% 100% fixed no-repeat;
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

  .content-text {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    p {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
    h5 {
      font-weight: bold;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .portifolio-images {
    display: grid;
    width: 100%;
    grid-template-columns: 40% 40%;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    background-color: #000;
    padding-top: 4%;
    .image1 {
      width: 98%;
      height: 400px;
      overflow: hidden;
      float: left;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .image2 {
      width: 98%;
      height: 400px;
      float: right;
      img {
        width: 100%;
        height: 100%;
      }
      margin-left: 2%;
    }
    .image3 {
      width: 100%;
      margin-top: 2%;
      grid-column: 1/3;
      height: 450px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transform: translateY(-100px);
      }
    }
  }

  .box {
    width: 100%;
    display: flex;
    grid-row: 3/4;
    grid-column: 1/3;
    align-items: center;
    justify-content: center;
    transform: translateY(-50px);

    &1 {
      width: 15px;
      height: 15px;
      background-color: #484b4d;
      border-radius: 50%;
    }
    &2 {
      width: 15px;
      height: 15px;
      background-color: #484b4d;
      border-radius: 50%;
      margin-left: 1%;
      margin-right: 1%;
    }
    &3 {
      width: 15px;
      height: 15px;
      background-color: #484b4d;
      border-radius: 50%;
    }
  }
`;
