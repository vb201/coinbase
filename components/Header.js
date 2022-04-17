import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
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

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const WalletLink = styled.div`
  font-size: 0.8rem;
  border: 1px solid #282b2f;
  border-radius: 50rem;
  font-size: 1.3rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const WalletLinkTitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`;
const WalletAddress = styled.div`
  font-size: 0.8rem;
  /* color: #8a919e; */
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
