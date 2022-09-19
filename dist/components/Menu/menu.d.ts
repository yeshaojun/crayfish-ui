import React, { CSSProperties } from "react";
declare type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: string;
  mode?: MenuMode;
  className?: String;
  style?: CSSProperties;
  onSelect?: (selectIndex: string) => void;
  children?: React.ReactNode;
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: (selectIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
