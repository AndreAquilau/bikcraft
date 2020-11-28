import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  background-color: #fec63e;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
  padding: 0% 4%;

  .logo {
    width: 100px;
    height: 64px;
    transform: scale(0.7);
  }

  .menu-list {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, auto);
    &_itens a {
      color: #000000;
      margin-right: 15px;
      text-transform: uppercase;
      font-weight: bold;

      &:hover {
        text-transform: underline;
      }
    }
  }
`;
