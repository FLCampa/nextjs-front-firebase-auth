// External Libraries
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  > img {
    display: none;
    width: 50%;
    height: 100vh;
    object-fit: cover;

    @media (min-width: 800px) {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 50px;

  > hr {
    width: 100%;

    margin: 15px 0;
    border: 1px solid lightgray;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;

  margin-bottom: 15px;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;

  padding: 3px 6px;
  background: #e85d54;

  font-size: 15px;
  color: white;

  border: 2px solid red;
  border-radius: 3px;

  > svg {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
`;

interface ButtonProps {
  google?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 8px;
  margin-top: ${(props) => (props.google ? 0 : "20px")};
  background: ${(props) => (props.google ? "#DB4437" : "#4285F4")};

  color: white;

  border-radius: 3px;

  &:hover {
    background: ${(props) => (props.google ? "#e85d54" : "#5d97f5")};
    cursor: pointer;
  }
`;

export const ChangeModeText = styled.p`
  margin-top: 20px;

  font-size: 15px;
`;

export const Link = styled.a`
  margin-left: 5px;

  color: #4285f4;

  &:hover {
    cursor: pointer;
  }
`;
