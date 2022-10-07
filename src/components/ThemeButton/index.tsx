// External Libraries
import React from "react";

// Assets
import { MoonIcon, SunIcon } from "../../styles/icons";

// Stylization
import { Container, IconContainer, Text } from "./styles";

// Interface
interface ThemeButtonProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, toggleTheme }) => {
  return theme === "dark" ? (
    <Container onClick={toggleTheme} theme={theme}>
      <IconContainer theme={theme}>{SunIcon}</IconContainer>

      <Text theme={theme}>
        <span>Light</span>
      </Text>
    </Container>
  ) : (
    <Container onClick={toggleTheme} theme={theme}>
      <Text theme={theme}>
        <span>Dark</span>
      </Text>

      <IconContainer theme={theme}>{MoonIcon}</IconContainer>
    </Container>
  );
};

export default ThemeButton;
