// External Libraries
import styled from "styled-components";

export const ListItem = styled.li`
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
`;

export const Text = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
