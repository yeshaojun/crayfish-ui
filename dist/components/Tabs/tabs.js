var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { createContext, useState, useEffect, useRef } from "react";
import classNames from "classnames";
export var TabsContext = createContext({ active: "0" });
var Tabs = function (props) {
  var className = props.className,
    active = props.active,
    tabBarExtraContent = props.tabBarExtraContent,
    onChange = props.onChange,
    mode = props.mode,
    children = props.children,
    restProps = __rest(props, [
      "className",
      "active",
      "tabBarExtraContent",
      "onChange",
      "mode",
      "children",
    ]);
  var classes = classNames("crayfish-tabs", className, {
    "tabs-vertical": mode === "vertical",
    "tabs-horizontal": mode !== "vertical",
  });
  var _a = useState(active),
    currentActive = _a[0],
    setActive = _a[1];
  var _b = useState(""),
    w = _b[0],
    setW = _b[1];
  var _c = useState(""),
    l = _c[0],
    setL = _c[1];
  var _d = useState(""),
    t = _d[0],
    setT = _d[1];
  var _e = useState(""),
    h = _e[0],
    setH = _e[1];
  var linkDom = useRef(null);
  var handleClick = function (index) {
    setActive(index);
    if (onChange) {
      onChange(index);
    }
  };
  var passedContext = {
    active: currentActive ? currentActive : "0",
    onChange: handleClick,
  };
  var renderNav = function () {
    return React.Children.map(children, function (child, index) {
      var ele = child;
      if (ele.type.displayName === "TabPane") {
        return React.createElement(
          "li",
          {
            key: index,
            className: classNames({
              "is-disabled": ele.props.disabled,
            }),
            onClick: function () {
              if (!ele.props.disabled) {
                handleClick(index.toString());
              }
            },
          },
          ele.props.tab
        );
      } else {
        console.error(
          "Warning: Tabs has a child which is not a TabPane component"
        );
      }
    });
  };
  var renderChildren = function () {
    return React.Children.map(children, function (child, index) {
      var ele = child;
      if (ele.type.displayName === "TabPane") {
        return React.cloneElement(ele, {
          index: index.toString(),
          mode: mode,
        });
      } else {
        console.error(
          "Warning: Tabs has a child which is not a TabPane component"
        );
      }
    });
  };
  useEffect(
    function () {
      if (linkDom.current) {
        if (mode === "horizontal") {
          setL(
            linkDom.current.children[Number(currentActive)].offsetLeft + "px"
          );
          setW(
            linkDom.current.children[Number(currentActive)].clientWidth + "px"
          );
        } else {
          setT(
            linkDom.current.children[Number(currentActive)].offsetTop + "px"
          );
          setH(
            linkDom.current.children[Number(currentActive)].clientHeight + "px"
          );
        }
      }
    },
    [currentActive, mode]
  );
  return React.createElement(
    TabsContext.Provider,
    { value: passedContext },
    React.createElement(
      "div",
      __assign({ className: classes }, restProps, {
        "data-testid": "test-tabs",
      }),
      React.createElement(
        "div",
        { className: "crayfish-tabs-top" },
        tabBarExtraContent === null || tabBarExtraContent === void 0
          ? void 0
          : tabBarExtraContent.left,
        React.createElement(
          "div",
          { className: "tabs-menu" },
          React.createElement("ul", { ref: linkDom }, renderNav()),
          React.createElement("div", {
            className: "tabs-ink-bar",
            style: {
              width: w,
              left: l,
              height: h,
              top: t,
            },
          })
        ),
        tabBarExtraContent === null || tabBarExtraContent === void 0
          ? void 0
          : tabBarExtraContent.right
      ),
      React.createElement(
        "div",
        { className: "crayfish-tabs-content" },
        renderChildren()
      )
    )
  );
};
Tabs.defaultProps = {
  mode: "horizontal",
  active: "0",
};
export default Tabs;
