import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  margin: 10px auto;
  height: 60px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddListInput = styled.input`
  width: 512px;
  height: 58px;
  background-color: white;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 18px;
  :hover {
    background-color: white;
    border: 3px solid #d9d9d9;
  }
`;

const Button = styled.button`
  width: 83px;
  height: 58px;
  background: #d9d9d9;
  border: none;
  border-radius: 20px;
  margin: 10px;
  font-size: 18px;
  color: #495057;
  :hover {
    background-color: white;
    border: 3px solid #d9d9d9;
  }
`;

function Form() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = { text, done: false };
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    };
    fetch("http://localhost:3001/todos", request)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <AddListInput
        placeholder="할 일을 입력해주세요."
        onChange={(e) => setText(e.target.value)}
      ></AddListInput>
      <Button>Add</Button>
    </FormContainer>
  );
}

export default Form;
