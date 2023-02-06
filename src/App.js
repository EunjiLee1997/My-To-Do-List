import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Main from "./components/Main";
import Form from "./components/Form";
import ToDoItem from "./components/ToDoItem";

const GlobalStyle = createGlobalStyle`
  body{
    background: rgba(162, 199, 234, 1);
  }
`;

const wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="wrap">
        <Form />
        <Main />
      </div>
    </>
  );
}

export default App;
