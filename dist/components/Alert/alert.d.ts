import { FC, ReactNode } from "react";
export declare type AlertType = "success" | "info" | "warn" | "error";
export interface AlertProps {
  className?: string;
  closeable?: Boolean;
  message: String;
  type?: AlertType;
  description?: string;
  showIcon?: Boolean;
  closeText?: string;
  icon?: ReactNode;
  afterClose?: () => void;
}
declare const Alert: FC<AlertProps>;
export default Alert;
