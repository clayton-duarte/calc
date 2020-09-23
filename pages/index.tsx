import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.palette.TEXT};
`;

const HomePage: NextPage = () => {
  return <Title>My page</Title>;
};

export default HomePage;
