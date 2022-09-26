import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  FC,
} from "react";
import { Icon } from "../Icon/icon";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /** 是否禁用 */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * import { Input } from 'vikingship'
 */
export const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  const cnames = classNames("crayfish-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-froup": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  // 如果传了defaultvalue以及value,可能会有问题
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="crayfish-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`}></Icon>
        </div>
      )}
      <input
        className="crayfish-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="crayfish-input-group-append">{append}</div>}
    </div>
  );
};
