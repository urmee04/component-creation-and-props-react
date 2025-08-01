// Define the valid alert types for better type safety
export type AlertType = "success" | "error" | "warning" | "info";

// Define the props expected by the AlertBox component
export interface AlertBoxProps {
  type?: AlertType; // Optional: default will be 'info' if not passed
  message: string; // Required: main alert message
  onClose?: () => void; // Optional: callback when close button is clicked
  children?: React.ReactNode; // Optional: additional content inside alert
}

//define the props expected by the UserProfileCard component
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

//define props expected by the ProductDisplay component
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}
