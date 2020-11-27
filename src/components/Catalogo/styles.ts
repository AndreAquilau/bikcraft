import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  background-color: #000000;
  width: 300px;
  h3 {
    text-transform: uppercase;
    font-weight: bold;
  }

  .catalogo-header {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .catalogo-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: cesnter;
    background-color: #fec63e;
    text-align: center;

    h3 {
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 6%;
    }
    hr {
      width: 60px;
      border: 0;
      border-top: 2px solid #000000;
      height: 1px;
    }
    p {
      padding: 0% 10%;
      margin-bottom: 4%;
    }
  }
`;
