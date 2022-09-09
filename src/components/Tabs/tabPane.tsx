import React, { useContext } from "react";
import classNames from "classnames";
import { MenuMode, TabsContext } from "./tabs";
import Transition from "../Transition/transition";

export interface TabPaneProps {
  tab: string;
  index?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  mode?: MenuMode;
}

export const TabPane: React.FC<TabPaneProps> = (props) => {
  const { index, children, mode } = props;
  const context = useContext(TabsContext);
  const classes = classNames("tabs-tab", {
    "is-active": context.active === index,
  });
  return (
    <Transition
      in={context.active === index}
      timeout={300}
      animation={mode === "vertical" ? "zoom-in-top" : "zoom-in-right"}
    >
      <div className={classes}>{children}</div>
    </Transition>
  );
};

TabPane.displayName = "TabPane";
