import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Intro", module).add(
  "Intro",
  () => {
    return (
      <>
        <h1>欢迎来到 crayfish 组件库</h1>
        <p>crayfish 是一套仿antd的组建库,</p>
        <h3>安装试试</h3>
        <code>npm install crayfish-ui --save</code>
      </>
    );
  },
  { info: { disable: true } }
);
