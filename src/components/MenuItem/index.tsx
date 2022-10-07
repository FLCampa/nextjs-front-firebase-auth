// External Libraries
import React from "react";
import Link from "next/link";

// Stylization
import { ListItem, Anchor, IconContainer, Text } from "./styles";

// Interface
interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, text, icon, onClick }) => {
  function renderContent() {
    return (
      <Anchor>
        <IconContainer>{icon}</IconContainer>
        <Text>{text}</Text>
      </Anchor>
    );
  }

  return (
    <ListItem onClick={onClick}>
      {url ? <Link href={url}>{renderContent()}</Link> : renderContent()}
    </ListItem>
  );
};

export default MenuItem;
