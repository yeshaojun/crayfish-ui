import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
export type AlertType = "success" | "info" | "warn" | "error";

export interface AlertProps {
  className?: string;
  /**是否显示close按钮 */
  closeable?: Boolean;
  /**显示标题 */
  message: String;
  /**alert的类型 */
  type?: AlertType;
  /**显示内容 */
  description?: string;
  /**是否自定义标题icon */
  showIcon?: Boolean;
  /**自定义icon */
  icon?: ReactNode;
  /**关闭事件回调 */
  afterClose?: () => void;
}

/**
 * ### 引用方法
 * import { Alert } from 'crayfish-ui'
 */
export const Alert: FC<AlertProps> = (props) => {
  const {
    closeable,
    message,
    type,
    description,
    className,
    showIcon,
    icon,
    afterClose,
    ...restProps
  } = props;
  const [closed, setClosed] = useState(false);

  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });

  const renderIcon = () => {
    if (showIcon) {
      if (icon) {
        return icon;
      }
    }
  };

  const close = () => {
    setClosed(true);
    afterClose && afterClose();
  };

  return (
    <Transition in={!closed} timeout={300} animation="zoom-in-top">
      <div className={classes} {...restProps}>
        {renderIcon()}
        <div className="alert-content">
          <div className="alert-content-message">{message}</div>
          <div className="alert-description">{description}</div>
        </div>
        {closeable ? (
          <div className="alert-close-icon" onClick={close}>
            <Icon icon="close" theme="primary"></Icon>
          </div>
        ) : null}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  closeable: false,
  showIcon: false,
  type: "success",
};

export default Alert;
