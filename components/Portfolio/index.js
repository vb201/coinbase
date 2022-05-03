import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  Balance,
  BalanceTitle,
  BalanceValue,
  Chart,
  Content,
  Divider,
  PortfolioTable,
  Table,
  TableItem,
  TableRow,
  Title,
  Wrapper,
} from "./Portfolio.styles";
import { coins } from "../../data/coins";
import Coin from "../Coin";
import BalanceChart from "../Chart";

const Portfolio = ({ twTokens, sanityTokens, walletAddress }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [sender] = useState(walletAddress);

  const getBalance = async (activeTwToken) => {
    const balance = await activeTwToken.balanceOf(sender);

    return parseInt(balance.displayValue);
  };

  useEffect(() => {
    const calculateTotalBalance = async () => {
      setWalletBalance(0);

      sanityTokens.map(async (token) => {
        const currentTwToken = twTokens.filter(
          (twToken) => twToken.address === token.contractAddress
        );

        const balance = await getBalance(currentTwToken[0]);
        setWalletBalance((prevState) => prevState + balance * token.usdPrice);
      });
    };

    if (sanityTokens.length > 0 && twTokens.length > 0) {
      calculateTotalBalance();
    }
  }, [twTokens, sanityTokens]);

  return (
    <Wrapper>
      <Content>
        <Chart>
          <Balance>
            <BalanceTitle>Portfolio balance</BalanceTitle>
            <BalanceValue>
              {"₹"}
              {walletBalance.toLocaleString("INR")}
            </BalanceValue>
          </Balance>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0, color: "#0a0b0d" }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map((coin, index) => (
                <div key={index}>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  );
};

export default Portfolio;
