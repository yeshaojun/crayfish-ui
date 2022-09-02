import React, { Children, CSSProperties } from "react";

export interface MenuProps {
  mode?: "horizontal" | "vertical";
  className?: String;
  style?: CSSProperties;
  onSelect?: (selectIndex: number) => void;
}

// 给menu Item传值 先不管
// interface IMenuContent {
//     index: String;
// }

export const Menu: React.FC<MenuProps> = (props) => {
  const { children } = props;
  return <ul>{children}</ul>;
};
