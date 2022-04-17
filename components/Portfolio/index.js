import React from "react";
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

const Portfolio = () => {
  return (
    <Wrapper>
      <Content>
        <Chart>
          <Balance>
            <BalanceTitle>Portfolio balance</BalanceTitle>
            <BalanceValue>
              {"₹"}
              {/* {walletBalance.toLocaleString()} */}
              475,500
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
                <div style={{ flex: 0 }}>
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
