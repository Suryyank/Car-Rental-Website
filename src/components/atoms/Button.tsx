"use client";

import React from "react";
import { IconBaseProps } from "react-icons";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = "button",
  className = "",
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-full bg-primary text-white font-bold shadow-md transition duration-200 ${className}`}
    >
      {title}
      {icon}
    </button>
  );
};

export default Button;
