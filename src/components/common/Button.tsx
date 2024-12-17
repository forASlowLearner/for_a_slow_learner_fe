import React from "react";
import KakaoLogo from "./../../assets/icons/kakao.svg";

interface ButtonProps {
  color: "green" | "gray" | "white" | "kakao" | "sky";
  type?: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  color,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  children,
}: ButtonProps) => {
  // 각 버튼 색상에 대한 Tailwind CSS 클래스 설정
  const typeClasses = {
    green: "bg-[#6DA457] hover:bg-[#5b8e47] text-white ",
    gray: "bg-[#919191] hover:bg-[#717171] text-white ",
    white: "bg-white hover:bg-slate-50 border border-gray-300 ",
    kakao: "bg-[#FFEB00] hover:bg-[#FFC300] text-black ",
    sky: "bg-[#BDD3ED] hover:bg-[#aec2da] text-white ",
  };
  if (color === "kakao") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`rounded-md p-2.5 w-full font-semibold shadow-md ${typeClasses[color]} ${className} flex justify-center items-center`}
        disabled={disabled}
      >
        <img src={KakaoLogo} alt="kakao" className="w-6 h-6 inline-block" />
        <span>&nbsp; 카카오 로그인</span>
      </button>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md p-2.5 w-full font-semibold shadow-md ${typeClasses[color]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
