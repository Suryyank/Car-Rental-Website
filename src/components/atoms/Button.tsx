"use client";

import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-2xl bg-primary text-white font-mono shadow-md transition duration-200 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
