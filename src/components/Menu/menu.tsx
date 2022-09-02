import React, { Children, CSSProperties } from "react";
import classNames from "classnames";

export interface MenuProps {
  mode?: "horizontal" | "vertical";
  className?: String;
  style?: CSSProperties;
  onSelect?: (selectIndex: number) => void;
  children: React.ReactNode;
}

// 给menu Item传值 先不管
// interface IMenuContent {
//     index: String;
// }

export const Menu: React.FC<MenuProps> = (props) => {
  const { children, className, style, onSelect, mode } = props;
  const classes = classNames("crayfish-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};
