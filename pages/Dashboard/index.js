import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";
import { MainContainer, Wrapper } from "./Dashboard.styles";

const Dashboard = ({ address }) => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;
