import React, { useContext } from "react";
import classNames from "classnames";
import { TabsContext } from "./tabs";

export interface TabPaneProps {
  tab: string;
  index: string;
  children?: React.ReactNode;
}

export const TabPane: React.FC<TabPaneProps> = (props) => {
  const { tab, index, children } = props;
  const context = useContext(TabsContext);
  const classes = classNames("tabs-tab", {
    "is-active": context.active === index,
  });
  return <li className={classes}>{children}</li>;
};

TabPane.displayName = "TabPane";
