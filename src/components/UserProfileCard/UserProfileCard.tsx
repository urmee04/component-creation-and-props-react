// components/UserProfileCard/UserProfileCard.tsx
import React from "react";
import type { UserProfileCardProps } from "../../types";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true, //show user's email by default
  showRole = true, //show user's role by default
  onEdit, //optional callback for Edit button
  children, //optional slot-style children content
}) => {
  return (
    <div
      className="bg-white rounded-lg p-6 max-w-md mx-auto ring-1 ring-gray-300"
      //ring-1 (thin outline) and ring-gray-300 (light gray color) to simulate a full shadow.
    >
      <div className="flex items-center space-x-4">
        {/*if user has an avatar URL, show image; otherwise fallback to initials */}
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            {/*first letter of user's name as fallback avatar */}
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}

        {/* user information: name, email (optional), and role (optional) */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{user.name}</h2>

          {/* conditionally show email */}
          {showEmail && <p className="text-gray-600">{user.email}</p>}

          {/* conditionally show role as a badge */}
          {showRole && (
            <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
              {user.role}
            </span>
          )}
        </div>
      </div>

      {/* Optional children content */}
      {children && <div className="mt-4">{children}</div>}

      {/* conditionally show Edit button if onEdit is passed */}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-6 px-16 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};
