import React, { createContext, useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { TabPaneProps } from "./tabPane";

export type MenuMode = "horizontal" | "vertical";
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

  const [w, setW] = useState("");
  const [l, setL] = useState("");
  const [t, setT] = useState("");
  const [h, setH] = useState("");

  const linkDom = useRef<HTMLUListElement>(null);

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

  const renderNav = () => {
    return React.Children.map(children, (child, index) => {
      const ele = child as React.FunctionComponentElement<TabPaneProps>;
      if (ele.type.displayName === "TabPane") {
        return (
          <li
            key={index}
            className={classNames({
              ["is-disabled"]: ele.props.disabled,
            })}
            onClick={() => {
              if (!ele.props.disabled) {
                handleClick(index.toString());
              }
            }}
          >
            {ele.props.tab}
          </li>
        );
      } else {
        console.error(
          "Warning: Tabs has a child which is not a TabPane component"
        );
      }
    });
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const ele = child as React.FunctionComponentElement<TabPaneProps>;
      if (ele.type.displayName === "TabPane") {
        return React.cloneElement(ele, {
          index: index.toString(),
          mode,
        });
      } else {
        console.error(
          "Warning: Tabs has a child which is not a TabPane component"
        );
      }
    });
  };

  useEffect(() => {
    if (linkDom.current) {
      if (mode === "horizontal") {
        setL(
          (linkDom.current.children[Number(currentActive)] as HTMLLIElement)
            .offsetLeft + "px"
        );
        setW(
          linkDom.current.children[Number(currentActive)].clientWidth + "px"
        );
      } else {
        setT(
          (linkDom.current.children[Number(currentActive)] as HTMLLIElement)
            .offsetTop + "px"
        );
        setH(
          linkDom.current.children[Number(currentActive)].clientHeight + "px"
        );
      }
    }
  }, [currentActive]);

  return (
    <TabsContext.Provider value={passedContext}>
      <div className={classes} {...restProps} data-testid="test-tabs">
        <div className="crayfish-tabs-top">
          {tabBarExtraContent?.left}
          <div className="tabs-menu">
            <ul ref={linkDom}>{renderNav()}</ul>
            <div
              className="tabs-ink-bar"
              style={{
                width: w,
                left: l,
                height: h,
                top: t,
              }}
            ></div>
          </div>
          {tabBarExtraContent?.right}
        </div>
        <div className="crayfish-tabs-content">{renderChildren()}</div>
      </div>
    </TabsContext.Provider>
  );
};

Tabs.defaultProps = {
  mode: "horizontal",
  active: "0",
};
