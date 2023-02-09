import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const Block = styled.div`
  width: 600px;
  height: 836px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Main({ todos }) {
  return (
    <Block>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} text={todo.text} done={todo.done} />
      ))}
    </Block>
  );
}

export default Main;
