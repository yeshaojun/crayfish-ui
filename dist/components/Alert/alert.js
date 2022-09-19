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
import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
var Alert = function (props) {
  var _a;
  var closeable = props.closeable,
    message = props.message,
    type = props.type,
    description = props.description,
    className = props.className,
    showIcon = props.showIcon,
    closeText = props.closeText,
    icon = props.icon,
    afterClose = props.afterClose,
    restProps = __rest(props, [
      "closeable",
      "message",
      "type",
      "description",
      "className",
      "showIcon",
      "closeText",
      "icon",
      "afterClose",
    ]);
  var _b = useState(false),
    closed = _b[0],
    setClosed = _b[1];
  var classes = classNames(
    "alert",
    className,
    ((_a = {}), (_a["alert-".concat(type)] = type), _a)
  );
  var renderIcon = function () {
    if (showIcon) {
      if (icon) {
        return icon;
      } else {
        return type;
      }
    }
  };
  var close = function () {
    setClosed(true);
    afterClose && afterClose();
  };
  return React.createElement(
    Transition,
    { in: !closed, timeout: 300, animation: "zoom-in-top" },
    React.createElement(
      "div",
      __assign({ className: classes }, restProps),
      renderIcon(),
      React.createElement(
        "div",
        { className: "alert-content" },
        React.createElement(
          "div",
          { className: "alert-content-message" },
          message
        ),
        React.createElement(
          "div",
          { className: "alert-description" },
          description
        )
      ),
      React.createElement(
        "div",
        { className: "alert-close-icon", onClick: close },
        React.createElement(Icon, { icon: "close" })
      )
    )
  );
};
Alert.defaultProps = {
  closeable: false,
  showIcon: false,
  type: "success",
};
export default Alert;
