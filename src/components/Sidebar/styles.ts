// External Libraries
import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;

  div + ul {
    flex: 1;
  }

  > :last-child {
    color: red;

    > :hover {
      color: white;
      background: #f67280;
    }
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;
`;

export const LogoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  background: lightskyblue;
`;
