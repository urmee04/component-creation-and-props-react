// Define the valid alert types for better type safety
export type AlertType = "success" | "error" | "warning" | "info";

// Define the props expected by the AlertBox component
export interface AlertBoxProps {
  type?: AlertType; // Optional: default will be 'info' if not passed
  message: string; // Required: main alert message
  onClose?: () => void; // Optional: callback when close button is clicked
  children?: React.ReactNode; // Optional: additional content inside alert
}
