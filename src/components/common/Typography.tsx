import React from 'react';

interface Props {
    title: string;
    type: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3" | "body4" | "body5" | "small1" | "small2" | "small3";
    className?: string; // 추가된 className
}

export default function Typography({ title, type, className }: Props) {
    const render = () => {
        const baseClass = className || ''; // 추가된 className이 없으면 빈 문자열

        if (type === 'h1') {
            return <div className={`text-[40px] font-extrabold ${baseClass}`}>{title}</div>;
        } else if (type === 'h2') {
            return <div className={`text-[35px] font-bold ${baseClass}`}>{title}</div>;
        } else if (type === 'h3') {
            return <div className={`text-[30px] font-semibold ${baseClass}`}>{title}</div>;
        } else if (type === 'h4') {
            return <div className={`text-[25px] font-semibold ${baseClass}`}>{title}</div>;
        } else if (type === 'body1') {
            return <div className={`text-[20px] font-bold ${baseClass}`}>{title}</div>;
        } else if (type === 'body2') {
            return <div className={`text-[20px] font-medium ${baseClass}`}>{title}</div>;
        } else if (type === 'body3') {
            return <div className={`text-[18px] font-bold ${baseClass}`}>{title}</div>;
        } else if (type === 'body4') {
            return <div className={`text-[18px] font-medium ${baseClass}`}>{title}</div>;
        } else if (type === 'body5') {
            return <div className={`text-[16px] font-medium ${baseClass}`}>{title}</div>;
        } else if (type === 'small1') {
            return <div className={`text-[15px] font-medium ${baseClass}`}>{title}</div>;
        } else if (type === 'small2') {
            return <div className={`text-[15px] font-medium text-[#646464] ${baseClass}`}>{title}</div>;
        } else if (type === 'small3') {
            return <div className={`text-[13px] font-regular text-[#646464] ${baseClass}`}>{title}</div>;
        }
    };

    return <>{render()}</>;
}
