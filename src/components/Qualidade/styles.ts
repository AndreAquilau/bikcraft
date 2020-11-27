import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  .qualidade-header {
    text-transform: uppercase;
    font-weight: bold;
  }
  .qualidade-layout {
    margin-top: 4%;
    display: flex;
    justify-content: center;
    width: 1080px;
    .box-logo {
      position: absolute;
      background-color: white;
      z-index: 1;
    }
    .box1 {
      width: 400px;
      height: 100px;
      border-left: 2px solid #000;
      border-top: 2px solid #000;
      border-right: 1px solid #000;
      margin-top: 60px;
    }
    .box2 {
      width: 400px;
      height: 100px;
      border-right: 2px solid #000;
      border-top: 2px solid #000;
      border-left: 1px solid #000;

      margin-top: 60px;
    }
  }

  .qualidade-texto {
    display: grid;
    width: 1080px;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1%;
    .qualidade-texto_1 {
      h3 {
        text-transform: uppercase;
        text-align: center;
        transform: translateX(-50px);
      }
      hr {
        width: 60px;
        border: 0;
        border-top: 3px solid #000;
        transform: translateX(-50px);
      }
      p {
        font-family: Georgia, 'Times New Roman', Times, serif;
        padding-right: 8%;
        padding-top: 4%;
      }
    }
    .qualidade-texto_2 {
      h3 {
        text-transform: uppercase;
        text-align: center;
      }
      hr {
        width: 60px;
        border: 0;
        border-top: 3px solid #000;
      }
      p {
        font-family: Georgia, 'Times New Roman', Times, serif;
        padding: 4%;
        text-align: center;
      }
    }
    .qualidade-texto_3 {
      h3 {
        text-transform: uppercase;
        text-align: center;
        transform: translateX(50px);
      }
      hr {
        width: 60px;
        border: 0;
        border-top: 3px solid #000;
        transform: translateX(50px);
      }
      p {
        font-family: Georgia, 'Times New Roman', Times, serif;
        padding-left: 8%;
        padding-top: 4%;
        transform: translateX(60px);
      }
    }
  }

  .qualidade-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4%;
    p {
      font-family: Georgia, 'Times New Roman', Times, serif;
      text-align: center;
    }

    button {
      margin-top: 10%;
      width: 140px;
      border: 4px solid #fec63e;
      text-transform: uppercase;
      color: #fec63e;
      font-weight: bold;
      padding: 4% 2%;
      cursor: pointer;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
