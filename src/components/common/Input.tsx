import React from "react";

interface InputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
}

const Input = ({
                   type,
                   placeholder,
                   value,
                   onChange,
                   className = "",
                   required = false,
                   disabled = false,
                   checked = false,
                   name,
               }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border border-gray-300 rounded-md p-2 w-full ${
                type === "radio" ? "mr-2" : ""
            } ${className}`}
            required={required}
            disabled={disabled}
            checked={type === "radio" ? checked : undefined}
            name={name}
        />
    );
};

export default Input;
