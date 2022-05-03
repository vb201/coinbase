import React from "react";
import styled from "styled-components";
import {
  Button,
  ButtonsContainer,
  ProfileIcon,
  Separator,
  Title,
  WalletAddress,
  WalletLink,
  WalletLinkTitle,
  Wrapper,
} from "./Header.styles";
import Modal from "react-modal";
import { useRouter } from "next/router";
import TransferModal from "../modalComponents/TransferModal";
import Link from "next/link";

Modal.setAppElement("#__next");

const Header = ({ twTokens, sanityTokens, walletAddress, connectWallet }) => {
  const router = useRouter();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0a0b0d",
      padding: 0,
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(10, 11, 13, 0.75)",
    },
  };

  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Walelt Connected</WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 7)}...
              {walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>
        ) : (
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
        )}
        <Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
          Buy / Sell
        </Button>
        <Link href={"/?transfer=1"}>
          <Button>Send / Receive</Button>
        </Link>
      </ButtonsContainer>
      <Separator />
      <ProfileIcon />

      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <TransferModal
          twTokens={twTokens}
          sanityTokens={sanityTokens}
          walletAddress={walletAddress}
        />
      </Modal>
    </Wrapper>
  );
};

export default Header;
