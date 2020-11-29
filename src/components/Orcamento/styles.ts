import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  input,
  textarea {
    border: none;
    outline: none;
  }
  .orcamento-header {
    width: 100%;
    background-color: ${(props: { background: any }) => props.background};
    text-align: center;
    padding-top: 3%;

    h1 {
      font-size: 1.7rem;
      color: #fec63e;
      font-weight: bold;
    }
    hr {
      border: 0;
      width: 60px;
      border-top: 3px solid #fec63e;
    }
  }
  .orcamento-body {
    background-color: aliceblue;
    display: flex;
    width: 100%;
    padding-bottom: 3%;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props: { background: any }) => props.background};
  }
  #orcamento-body_formulario {
    width: 30%;
  }
  .orcamento-body_dados {
    width: 20%;
  }

  label {
    color: #fec63e;
  }
  .input-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
  }
  .message-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 5%;
  }

  input,
  textarea {
    border: 3px solid #fec63e;
    margin-top: 5%;
  }
  textarea {
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
    padding-right: 5%;
  }

  input {
    padding: 1%;
  }
  .orcamento-body_dados {
    .info-contato {
      h3 {
        font-size: 1.2rem;
        color: #fec63e;
        font-weight: bold;
      }
      p {
        color: #d9e0e6;
        font-family: Georgia, 'Times New Roman', Times, serif;
        line-height: 30px;
      }
    }
  }

  button {
    grid-area: btn;
    width: 140px;
    border: 3px solid #fec63e;
    text-transform: uppercase;
    color: #fec63e;
    font-weight: bold;
    padding: 1% 2%;
    margin-top: 5%;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }
`;
