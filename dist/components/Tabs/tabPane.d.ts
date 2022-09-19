import React from "react";
import { MenuMode } from "./tabs";
export interface TabPaneProps {
  tab: string;
  index?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  mode?: MenuMode;
}
declare const TabPane: React.FC<TabPaneProps>;
export default TabPane;
