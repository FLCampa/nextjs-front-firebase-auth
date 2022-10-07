// External Libraries
import React from "react";

// Stylization
import { Container } from "./styles";

// Interface
interface ContentProps {
  children: any;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
