import React, {
  createContext,
  CSSProperties,
  useState,
  ProviderProps,
} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode;
  className?: string;
  style?: CSSProperties;
  /**点击菜单项触发的回掉函数 */
  onSelect?: (selectIndex: string) => void;
  /** menuItem */
  children?: React.ReactNode;
  /** 设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: (selectIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });

/**
 * import { Menu } from 'crayfish-ui'
 */
export const Menu: React.FC<MenuProps> = (props) => {
  const {
    children,
    className,
    style,
    onSelect,
    mode,
    defaultIndex,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("crayfish-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default Menu;
