import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";
import { MainContainer, Wrapper } from "./Dashboard.styles";

const Dashboard = ({ address }) => {
  const [twTokens, setTwTokens] = useState([]);
  const [sanityTokens, setSanityTokens] = useState([]);

  const getCoins = async () => {
    try {
      const coins = await fetch(
        "https://9bpufwcy.api.sanity.io/v2021-10-21/data/listen/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20price%2C%0A%20%20contactAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const tempSanityTokens = await coins.json();

      setSanityTokens(tempSanityTokens.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  useEffect(() => {
    if (sanityTokens) {
      const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
          ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
        )
      );

      sanityTokens.map((tokenItem) => {
        const currentToken = sdk.getTokenModule(tokenItem.contractAddress);

        setTwTokens((prevState) => [...prevState, currentToken]);
      });
    }
  }, [sanityTokens]);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          twTokens={twTokens}
          sanityTokens={sanityTokens}
          walletAddress={address}
        />
        <Main
          twTokens={twTokens}
          sanityTokens={sanityTokens}
          walletAddress={address}
        />
      </MainContainer>
    </Wrapper>
  );
};

export async function getServerSideProps(context) {}

export default Dashboard;
