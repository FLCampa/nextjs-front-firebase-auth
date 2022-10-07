// External Libraries
import React from "react";

// Components
import Logo from "../Logo";
import MenuItem from "../MenuItem";

// Assets
import {
  HomeIcon,
  AdjustmentsIcon,
  BellIcon,
  LogoutIcon,
} from "../../styles/icons";

// Hooks
import useAuth from "../../data/hook/useAuth";

// Stylization
import { Container, UnorderedList, LogoItem } from "./styles";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <LogoItem>
        <Logo />
      </LogoItem>

      <UnorderedList>
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem
          url="/adjustments"
          text="Adjustments"
          icon={AdjustmentsIcon}
        />
        <MenuItem url="/notifications" text="Notifications" icon={BellIcon} />
      </UnorderedList>

      <UnorderedList>
        <MenuItem text="Logout" icon={LogoutIcon} onClick={logout} />
      </UnorderedList>
    </Container>
  );
};

export default Sidebar;
