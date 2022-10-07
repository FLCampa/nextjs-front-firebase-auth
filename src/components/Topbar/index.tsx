// External Libraries
import React from "react";

// Components
import Title from "../Title";
import ThemeButton from "../ThemeButton";
import UserAvatar from "../UserAvatar";

// Hooks
import useAppData from "../../data/hook/useAppData";

// Stylization
import { Container, ThemeContainer } from "./styles";

// Interface
interface TopbarProps {
  title: string;
  subtitle: string;
}

const Topbar: React.FC<TopbarProps> = ({ title, subtitle }) => {
  const { theme, toggleTheme } = useAppData();

  return (
    <Container>
      <Title title={title} subtitle={subtitle} />
      <ThemeContainer>
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        <UserAvatar />
      </ThemeContainer>
    </Container>
  );
};

export default Topbar;
