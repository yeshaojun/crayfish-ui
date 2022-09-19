import React from "react";
export declare type MenuMode = "horizontal" | "vertical";
export interface TabsProps {
  className?: string;
  active?: string;
  tabBarExtraContent?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  onChange?: (activeIndex: string) => void;
  mode?: MenuMode;
  children?: React.ReactNode;
}
interface ITabsContext {
  active: string;
  onChange?: (activeIndex: string) => void;
}
export declare const TabsContext: React.Context<ITabsContext>;
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
