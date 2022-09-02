import React, { Children, CSSProperties } from "react";
import classNames from "classnames";

export interface MenuItemProps {
  index?: String;
  disabled?: Boolean;
  className?: String;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    // 'is-active':
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};
