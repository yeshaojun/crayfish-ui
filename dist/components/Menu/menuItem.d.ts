import React from "react";
export interface MenuItemProps {
  index?: String;
  disabled?: Boolean;
  className?: String;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
