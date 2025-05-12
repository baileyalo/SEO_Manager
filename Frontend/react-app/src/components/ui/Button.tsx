import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-seo-blue text-seo-yellow rounded hover:bg-seo-bltr ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
