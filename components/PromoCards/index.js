import React from "react";
import {
  Additional,
  Description,
  OfferCard,
  Placeholder,
  Title,
  Wrapper,
} from "./PromoCards.styles";

const PromoCards = () => {
  return (
    <Wrapper>
      <OfferCard>
        <Title>Yield earned</Title>
        <Description>Earn up CO 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ fontSize: "1.5rem" }}>
          $0.000066 <span>2.84% APY</span>
        </Additional>
      </OfferCard>

      <OfferCard>
        <Title>Learn and Earn</Title>
        <Description>Earn up CO 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ color: "#3773f5" }}>Verify Identity</Additional>
      </OfferCard>
    </Wrapper>
  );
};

export default PromoCards;
