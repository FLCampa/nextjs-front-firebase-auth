// External Libraries
import React from "react";

// Components
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Content from "../Content";
import ForceAuth from "../ForceAuth";

// Stylization
import { Container, Section } from "./styles";

// Interface
interface LayoutProps {
  title: string;
  subtitle: string;
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, children }) => {
  return (
    <ForceAuth>
      <Container>
        <Sidebar />

        <Section>
          <Topbar title={title} subtitle={subtitle} />
          <Content>{children}</Content>
        </Section>
      </Container>
    </ForceAuth>
  );
};

export default Layout;
