import React, { useState } from "react";
import CoinbaseLogo from "../../assets/images/cb-logo.png";
import {
  Logo,
  LogoContainer,
  NavIcon,
  NavItem,
  NavItemsContainer,
  NavTitle,
  Wrapper,
} from "./Sidebar.styles";
import Image from "next/image";
import { navItems } from "../../data/navItems";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={CoinbaseLogo} alt="Coinbase Logo" />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item) => (
          <NavItem key={item.title} onClick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "#3773f5" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Sidebar;
