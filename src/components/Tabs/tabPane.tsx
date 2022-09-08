import React, { useContext } from "react";
import classNames from "classnames";
import { TabsContext } from "./tabs";

export interface TabPaneProps {
  tab: string;
  index?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const TabPane: React.FC<TabPaneProps> = (props) => {
  const { index, children } = props;
  const context = useContext(TabsContext);
  const classes = classNames("tabs-tab", {
    "is-active": context.active === index,
  });
  return <div className={classes}>{children}</div>;
};

TabPane.displayName = "TabPane";
