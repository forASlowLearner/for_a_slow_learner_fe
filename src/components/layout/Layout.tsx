import React from "react";
import Header from "./Header";

interface MainLayoutProps {
    children: React.ReactNode;
    backgroundImage?: string; // 배경 이미지 경로
    backgroundWidth?: string; // 배경 이미지 너비
}

const MainLayout = ({ children, backgroundImage, backgroundWidth }: MainLayoutProps) => {
    return (
        <div className="relative w-full h-screen bg-white flex items-center justify-center">
            <div
                className={`flex flex-col w-full max-w-[440px] h-full max-h-[920px] ${
                    backgroundImage ? "bg-center bg-cover bg-no-repeat" : ""
                }`}
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                }}
            >
                <Header backgroundWidth={backgroundWidth} />
                <main className="flex flex-col items-center justify-center w-full p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
