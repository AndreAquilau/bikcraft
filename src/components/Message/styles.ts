import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 270px;
  overflow: hidden;

  .text {
    width: 100%;
    height: 270px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    hr {
      border: 0;
      width: 60px;
      border-top: 3px solid #fff;
    }

    color: #fff;
  }

  .filter {
    height: 270px;
    position: relative;
    z-index: 0;
    background-color: #000;
    opacity: 0.7;
  }

  img {
    width: 100%;
    transform: translateY(-700px);
    position: relative;
    z-index: -1;
    position: relative;
  }
`;
