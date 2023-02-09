import { createGlobalStyle } from "styled-components";

import Form from "./components/Form";
import Main from "./components/Main";
import useFetch from "./hooks/useFetch";

const GlobalStyle = createGlobalStyle`
  body{
    background: rgba(162, 199, 234, 1);
  }
`;

function App() {
  const [data] = useFetch("http://localhost:3001/todos");
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <>
        <Form />
        <Main todos={data} />
      </>
    </>
  );
}

export default App;
