import React, { createContext, useState } from "react";
import classNames from "classnames";
import { TabPaneProps } from "./tabPane";

type MenuMode = "horizontal" | "vertical";
interface TabsProps {
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

export const TabsContext = createContext<ITabsContext>({ active: "0" });

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    className,
    active,
    tabBarExtraContent,
    onChange,
    mode,
    children,
    ...restProps
  } = props;

  const classes = classNames("crayfish-tabs", className, {
    "tabs-vertical": mode === "vertical",
    "tabs-horizontal": mode !== "vertical",
  });

  const [currentActive, setActive] = useState(active);

  const handleClick = (index: string) => {
    setActive(index);
    if (onChange) {
      onChange(index);
    }
  };

  const passedContext: ITabsContext = {
    active: currentActive ? currentActive : "0",
    onChange: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const ele = child as React.FunctionComponentElement<TabPaneProps>;
      if (ele.type.displayName === "TabPane") {
        return React.cloneElement(ele, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Tabs has a child which is not a TabPane component"
        );
      }
    });
  };

  return (
    <div className={classes} {...restProps}>
      {tabBarExtraContent?.left}
      <TabsContext.Provider value={passedContext}>
        <ul className="tabls-menu">{renderChildren()}</ul>
      </TabsContext.Provider>
      {tabBarExtraContent?.right}
    </div>
  );
};

Tabs.defaultProps = {
  mode: "horizontal",
};
