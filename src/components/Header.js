import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-size: 50px;
  margin: 30px;
`;

function Header() {
  return <Title>To Do List</Title>;
}

export default Header;
