import React from "react";
import type { AlertBoxProps } from "../../types";
import "./AlertBox.css";

export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children,
}) => {
  const alertClassMap = {
    success: "alert-success",
    error: "alert-error",
    warning: "alert-warning",
    info: "alert-info",
  };

  return (
    <div className={`alert-box ${alertClassMap[type]}`}>
      <div className="alert-content">
        <p>{message}</p>
        {onClose && (
          <button onClick={onClose} className="close-button">
            ×
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
