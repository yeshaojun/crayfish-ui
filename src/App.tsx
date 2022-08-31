import React from "react";
import { Button } from "./components/Button/button";
import { Alert } from "./components/Alert/alert";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button btnType="primary">hello</Button>
        <Button>hi</Button>
        <Button disabled>hi niyao</Button>
        <Button btnType="link">hi niyao</Button>

        <Alert
          message={"nihaoya"}
          type="info"
          description="nisdhgsduioghsdoighdsoighjid你和弟哦；老师的结果；是搭建了广阔"
        ></Alert>
      </header>
    </div>
  );
}

export default App;
