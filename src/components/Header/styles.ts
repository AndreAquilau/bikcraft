import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  background-color: #fec63e;
  padding: 1% 5%;
  justify-content: space-between;
  align-items: center;

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
        animation: hoverItensMenu 0.5s linear both;
      }
    }
  }

  @keyframes hoverItensMenu {
    to {
      text-decoration: underline;
    }
  }
`;
