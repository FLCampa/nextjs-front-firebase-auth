// External Libraries
import styled from "styled-components";

// Interface
interface ConteinerProps {
  theme: string;
}

export const Container = styled.div<ConteinerProps>`
  display: none;
  align-items: center;

  width: 100px;
  height: 35px;
  padding: 10px;
  margin-right: 10px;
  background: ${(props) => (props.theme === "dark" ? "yellowgreen" : "black")};

  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 500px) {
    display: flex;
    justify-content: ${(props) =>
      props.theme === "dark" ? "flex-start" : "flex-end"};
  }

  @media (max-width: 800px) {
    width: 75px;
  }
`;

export const IconContainer = styled.div<ConteinerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 22px;
  height: 22px;

  background: white;

  color: ${(props) => (props.theme === "dark" ? "green" : "black")};

  border-radius: 15px;

  > svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 500px) {
    margin-right: ${(props) => (props.theme === "dark" ? "20px" : 0)};
  }
`;

export const Text = styled.div<ConteinerProps>`
  display: none;
  align-items: center;

  margin-right: ${(props) => (props.theme === "dark" ? 0 : "20px")};

  color: white;

  @media (min-width: 800px) {
    display: flex;
  }
`;
