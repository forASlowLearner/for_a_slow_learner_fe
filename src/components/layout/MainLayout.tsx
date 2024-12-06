import React from 'react';
import Header from './Header';

interface MainLayoutProps {
    children: React.ReactNode;
    backgroundImage?: string; // 배경 이미지 경로를 전달할 수 있는 prop
    backgroundWidth?: string; // 배경 이미지의 너비 (선택적으로 추가)
}

const MainLayout = ({ children, backgroundImage, backgroundWidth }: MainLayoutProps) => {
    return (
        <div
            className={`min-h-screen w-full flex flex-col items-center ${
                backgroundImage ? 'bg-no-repeat bg-center' : 'bg-gray-100'
            }`}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: backgroundImage ? 'auto 100%' : undefined, // 높이에 맞추고 가로 비율 자동
            }}
        >
            <Header />
            <main
                className={`flex flex-col items-center justify-center ${
                    backgroundWidth ? `w-[${backgroundWidth}]` : 'max-w-screen-md'
                } p-4`}
                style={{
                    maxWidth: backgroundWidth || undefined, // 전달된 backgroundWidth에 따라 동적 설정
                }}
            >
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
