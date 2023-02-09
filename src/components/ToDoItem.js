import { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  margin-right: 20px;
  color: #d9d9d9;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const ToDoItemBlock = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 40%;
  margin: 15px;
  border: 2px solid #d9d9d9;
  font-size: 21px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 2px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 3;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #d9d9d9;
    `}
`;

function ToDoItem({ id, text, done, param }) {
  const [isDone, setIsDone] = useState(false);
  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/todos/${param}`, {
      method: "DELETE",
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const handleDoneClick = () => {
    setIsDone(!isDone);
    fetch(`http://localhost:3001/todos/${param}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isDone),
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <ToDoItemBlock key={id}>
      <CheckCircle done={done} onClick={handleDoneClick}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete onClick={handleDeleteClick} />
      </Remove>
    </ToDoItemBlock>
  );
}

export default ToDoItem;
