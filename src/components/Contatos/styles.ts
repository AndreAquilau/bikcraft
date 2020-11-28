import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 5%;
  grid-template-columns: 20% 20% 20%;
  justify-content: space-around;
  background-color: #000;
  h3 {
    text-transform: uppercase;
    font-weight: bold;
    color: #fec63e;
  }
  hr {
    border: 0;
    width: 100%;
    border-top: 3px solid #fec63e;
  }

  p {
    color: #fff;
  }
  .historia {
    display: grid;
    justify-content: start;
    text-align: start;
  }
  .contato {
    width: 100%;
    display: grid;
    justify-content: start;
    text-align: start;
  }
  .redesocial {
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: start;
  }

  img {
    border: 3px solid #fec63e;
    padding: 2%;
    margin-right: 4%;
  }
`;
