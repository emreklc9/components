import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  iconLeft,
  iconRight,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <div className="relative">
        {/* Left Icon */}
        {iconLeft && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            {iconLeft}
          </span>
        )}

        <input
          {...props}
          className={`
            w-full px-3 py-2 rounded-md border outline-none transition
            ${iconLeft ? "pl-10" : ""}
            ${iconRight ? "pr-10" : ""}
            ${error ? "border-red-500" : "border-gray-300"}
            focus:ring-2 focus:ring-blue-500
            ${className}
          `}
        />

        {/* Right Icon */}
        {iconRight && (
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            {iconRight}
          </span>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};
