import React from "react";
import styled from "styled-components";
import {
  Button,
  ButtonsContainer,
  Title,
  WalletAddress,
  WalletLink,
  WalletLinkTitle,
  Wrapper,
} from "./Header.styles";

const Header = ({ walletAddress, connectWallet }) => {
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        <WalletLink>
          <WalletLinkTitle>Walelt Connected</WalletLinkTitle>
          <WalletAddress>
            {walletAddress.slice(0, 7)}...
            {walletAddress.slice(35)}
          </WalletAddress>
        </WalletLink>
        <Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
          Buy / Sell
        </Button>
        {/* <Link href={"/?transfer=1"}> */}
        <Button>Send / Receive</Button>
        {/* </Link> */}
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Header;
