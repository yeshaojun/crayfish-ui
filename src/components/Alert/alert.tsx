import { FC, ReactNode, useState } from "react";
import classNames from "classnames";
export type AlertType = "success" | "info" | "warn" | "error";

export interface AlertProps {
  className?: string;
  closeable?: Boolean; // 是否显示close
  message: String;
  type?: AlertType;
  description?: string;
  showIcon?: Boolean;
  closeText?: string;
  icon?: ReactNode;
  afterClose?: () => void;
}

export const Alert: FC<AlertProps> = (props) => {
  const {
    closeable,
    message,
    type,
    description,
    className,
    showIcon,
    closeText,
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
      } else {
        return type;
      }
    }
  };

  const close = () => {
    setClosed(true);
    afterClose && afterClose();
  };

  // 这里应当加入动画
  // antd使用CSSMotion方式，rc-motion库
  if (!closed) {
    return (
      <div className={classes} {...restProps}>
        {renderIcon()}
        <div className="alert-content">
          <div className="alert-content-message">{message}</div>
          <div className="alert-description">{description}</div>
        </div>
        <div className="alert-close-icon" onClick={close}>
          关闭
        </div>
      </div>
    );
  } else {
    return null;
  }
};

Alert.defaultProps = {
  closeable: false,
  showIcon: false,
  type: "success",
};
