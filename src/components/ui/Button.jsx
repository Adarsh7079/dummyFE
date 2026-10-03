// src/components/ui/Button.jsx
import React from "react";

const Button = ({ text, onClick, className, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={ ` px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
