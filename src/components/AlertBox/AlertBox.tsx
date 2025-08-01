import React from "react";
import type { AlertBoxProps } from "../../types";

// AlertBox functional component definition
export const AlertBox: React.FC<AlertBoxProps> = ({
  type = "info", //default type is 'info' if not provided
  message, //main alert message
  onClose, //callback to close the alert
  children, //optional extra content inside the alert
}) => {
  //Tailwind CSS class mappings based on alert type
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  return (
    <div
      //combine base styles with alert-specific color classes
      className={`p-4 border-l-4 rounded mb-4 ${alertStyles[type]}`}
      role="alert" //accessibility role for screen readers
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">
          {/*display the main message */}
          <p className="font-medium">{message}</p>

          {/*display children content if provided (optional message or extra info) */}
          {children && <div className="mt-2">{children}</div>}
        </div>

        {/*show close button if onClose prop is passed */}
        {onClose && (
          <button
            onClick={onClose} //call the provided onClose function
            className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close alert" //accessibility label
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};
