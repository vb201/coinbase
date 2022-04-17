import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { coins } from "../../data/coins";
import { CoinIcon, NameCol, Primary, Secondary, Wrapper } from "./Coin.styles";

const Coin = ({ coin }) => {
  return (
    <Wrapper>
      <div>
        <div style={{ flex: 3 }}>
          <NameCol>
            <CoinIcon>
              <Image src={coin.logo} alt={coin.name} />
            </CoinIcon>
            <div>
              <Primary>{coin.name}</Primary>
              <Secondary>{coin.symbol}</Secondary>
            </div>
          </NameCol>
        </div>
        <div style={{ flex: 2 }}>
          <Primary>
            {"₹"}
            {coin.balanceINR}{" "}
          </Primary>
          <Secondary>
            {coin.balanceCoin} {coin.symbol}
          </Secondary>
        </div>
        <div style={{ flex: 1 }}>
          <Primary>
            {"₹"}
            {coin.priceINR}
          </Primary>
          <div style={{ color: coin.change < 0 ? "#f0616d" : "#26ad75" }}>
            {coin.change < 0 && "+"}
            {coin.change}%
          </div>
        </div>
        <div style={{ flex: 1 }}>{coin.allocation}</div>
        <div style={{ flex: 0 }}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </Wrapper>
  );
};

export default Coin;
