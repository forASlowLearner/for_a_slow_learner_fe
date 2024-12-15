import React from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  required = false,
  disabled = false,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-md p-2 w-full ${className}`}
      required={required}
      disabled={disabled}
    />
  );
};

export default Input;
