import styled from 'styled-components';

import { passeio1 } from '../../assets';

export const Container = styled.div`
  display: grid;
  margin-left: 10%;
  margin-right: 10%;
  grid-row-gap: 10px;
  margin-top: 10%;

  .header-produto {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-column-gap: 10px;

    grid-template-columns: 50% 35%;
    &_background {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: -1;
      height: 300px;
      img {
        width: 56%;
        height: 100%;
      }
    }
    &_title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 300px;

      h1 {
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        font-size: 1.5rem;
      }
      hr {
        border: 0;
        width: 80px;
        border-top: 3px solid #fff;
      }
    }
    &_img {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
    }
  }

  .footer-produto {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 45% 40%;
    grid-column-gap: 10px;
    &_img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    &_desc {
      display: grid;
      grid-template-rows: 200px 100px;

      .produto-desc_text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8%;
        background: #000;
        color: #fff;
        p {
          font-family: Georgia, 'Times New Roman', Times, serif;
        }
      }

      .produto-desc_qualidades {
        display: grid;
        grid-template-columns: 50% 50%;
        background: #d9e0e6;
        grid-column-gap: 2px;
        grid-row-gap: 2px;

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fec63e;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }
  }
`;
