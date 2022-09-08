import React from "react";
import { Button } from "./components/Button/button";
import { Alert } from "./components/Alert/alert";
import { Menu } from "./components/Menu/menu";
import { MenuItem } from "./components/Menu/menuItem";
import { SubMenu } from "./components/Menu/subMenu";
import { Tabs } from "./components/Tabs/tabs";
import { TabPane } from "./components/Tabs/tabPane";
import { spawn } from "child_process";
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          description="nisdhgsduioghsdoighdsoighjid你和弟哦；老师的结果；是搭建了广阔"
        ></Alert>

        <Menu defaultIndex="1">
          <MenuItem>1</MenuItem>
          <MenuItem disabled>2</MenuItem>
          <MenuItem>3</MenuItem>
          <SubMenu title="4">
            <MenuItem>4.1</MenuItem>
            <MenuItem>4.2</MenuItem>
            <MenuItem>4.3</MenuItem>
          </SubMenu>
        </Menu>

        <Tabs
          active="0"
          tabBarExtraContent={{
            left: <span>left</span>,
            right: <Button>hi</Button>,
          }}
          mode="vertical"
        >
          <TabPane tab="tab1">content test1</TabPane>
          <TabPane tab="tab2">content test2</TabPane>
          <TabPane tab="tab3" disabled>
            content test3
          </TabPane>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
