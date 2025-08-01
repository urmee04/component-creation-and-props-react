// components/ProductDisplay/ProductDisplay.tsx
import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product, //product object containing id, name, price, etc.
  showDescription = true, //whether to display the product description
  showStockStatus = true, //whether to display "In Stock" or "Out of Stock"
  onAddToCart, //callback when "Add to Cart" button is clicked
  children, //optional slot content (like shipping info)
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
      {/* Product Image */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        {/* product name and price */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>

        {/* optional product description */}
        {showDescription && (
          <p className="mt-2 text-gray-600">{product.description}</p>
        )}

        {/* optional stock status display */}
        {showStockStatus && (
          <p
            className={`mt-2 text-sm font-medium ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        )}

        {/* "add to Cart" button if product is in stock and onAddToCart exists */}
        {onAddToCart && product.inStock && (
          <button
            onClick={() => onAddToCart(product.id)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        )}

        {/* optional child content, like, Free shipping info */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};
