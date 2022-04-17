import React from "react";
import { Button, ButtonsContainer, Title, Wrapper } from "./Header.styles";

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
