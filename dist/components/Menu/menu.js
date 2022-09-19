import React, { createContext, useState } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
  var children = props.children,
    className = props.className,
    style = props.style,
    onSelect = props.onSelect,
    mode = props.mode,
    defaultIndex = props.defaultIndex,
    defaultOpenSubMenus = props.defaultOpenSubMenus;
  var _a = useState(defaultIndex),
    currentActive = _a[0],
    setActive = _a[1];
  var classes = classNames("crayfish-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  var handleClick = function (index) {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  var passedContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus,
  };
  var renderChildren = function () {
    return React.Children.map(children, function (child, index) {
      var childElement = child;
      var displayName = childElement.type.displayName;
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
  return React.createElement(
    "ul",
    { className: classes, style: style, "data-testid": "test-menu" },
    React.createElement(
      MenuContext.Provider,
      { value: passedContext },
      renderChildren()
    )
  );
};
Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};
export default Menu;
