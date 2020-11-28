import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: #000;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3% 12%;
  overflow: hidden;
  margin-top: 10%;
  grid-template-areas:
    'title title'
    'line line'
    'imagens imagens'
    'p p'
    'btn btn';
  h3 {
    grid-area: title;
    text-transform: uppercase;
    font-weight: bold;
    color: #fec63e;
  }
  hr {
    width: 60px;
    grid-area: line;
    border: 0;
    border-top: 3px solid #fec63e;
    height: 1px;
    margin-bottom: 2%;
  }
  .portifolio-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: imagens;
    overflow: hidden;
    width: 100%;
    .image1 {
      width: 100%;
      height: 400px;
      overflow: hidden;
      float: left;
      padding-right: 2%;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .image2 {
      width: 100%;
      height: 400px;
      float: right;
      padding-left: 2%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .image3 {
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

  p {
    grid-area: p;
    color: #fff;
  }
  button {
    grid-area: btn;
    width: 140px;
    border: 4px solid #fec63e;
    text-transform: uppercase;
    color: #fec63e;
    font-weight: bold;
    padding: 1% 2%;
    margin-top: 2%;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }
`;
