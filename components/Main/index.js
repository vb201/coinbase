import React from "react";
import Portfolio from "../Portfolio";
import { Wrapper } from "./Main.styles";

const Main = ({ twTokens, sanityTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio
        twTokens={twTokens}
        sanityTokens={sanityTokens}
        walletAddress={walletAddress}
      />
    </Wrapper>
  );
};

export default Main;
