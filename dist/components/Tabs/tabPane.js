import React, { useContext } from "react";
import classNames from "classnames";
import { TabsContext } from "./tabs";
import Transition from "../Transition/transition";
var TabPane = function (props) {
  var index = props.index,
    children = props.children,
    mode = props.mode;
  var context = useContext(TabsContext);
  var classes = classNames("tabs-tab", {
    "is-active": context.active === index,
  });
  return React.createElement(
    Transition,
    {
      in: context.active === index,
      timeout: 300,
      animation: mode === "vertical" ? "zoom-in-top" : "zoom-in-right",
    },
    React.createElement("div", { className: classes }, children)
  );
};
TabPane.displayName = "TabPane";
export default TabPane;
