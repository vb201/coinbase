import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: #fff;
  display: grid;
  place-items: center;
`;

export const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #3773f5;
  color: #000;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: #2f5feb;
  }
`;

export const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
  color: #282b2f;
`;
