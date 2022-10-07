// External Libraries
import React from "react";

// Stylization
import { Heading, Subtitle } from "./styles";

// Interface
interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <Heading>{title}</Heading>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  );
};

export default Title;
