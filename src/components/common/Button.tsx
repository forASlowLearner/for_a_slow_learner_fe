import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  type,
  onClick,
  className = "",
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      //TODO:: button Hover 처리, 타입별 색상 설정 필요
      className={`button hover:bg-green-900 bg-color1 rounded-md p-2 w-full ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
