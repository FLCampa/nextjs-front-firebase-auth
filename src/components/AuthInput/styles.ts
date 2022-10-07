// External Libraries
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15px;

  > label {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  padding: 8px 10px;
  margin-top: 5px;

  border-radius: 3px;
`;
