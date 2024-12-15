import React from "react";

interface ButtonProps {
  buttonType: "multi" | "positive" | "negative";
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  buttonType,
  type,
  onClick,
  className = "",
  disabled = false,
  children,
}: ButtonProps) => {
  // 각 버튼 타입에 대한 Tailwind CSS 클래스 설정
  const typeClasses = {
    positive: "bg-green-600 hover:bg-green-700 text-white",
    negative: "bg-red-600 hover:bg-red-700 text-white",
    multi: "bg-blue-600 hover:bg-blue-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md p-2 w-full ${typeClasses[buttonType]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
