import React from "react";
import speakingTurtle from "./../../assets/images/speakingTurtle.png";

interface BalloonProps {
    children: React.ReactNode;
    color?: string;
    arrowPosition?: "left" | "center" | "right";
}

const Balloon = ({ children, color = "bg-[#FDFFDB]", arrowPosition = "center" }: BalloonProps) => {
    const arrowPositionClass = {
        left: "left-4",
        center: "left-1/2 transform -translate-x-1/2",
        right: "right-4",
    };

    return (
        <div className="text-center relative z-10">
            {/* 네모난 말풍선 */}
            <div
                className={`relative ${color} p-8 rounded-xl shadow-md max-w-sm mt-[100px] mb-[60px] z-20`}
            >
                {children}
                {/* 세모 꼬리 */}
                <span
                    className={`absolute ${arrowPositionClass[arrowPosition]} w-4 h-4 ${color} rotate-45`}
                    style={{
                        top: "93%"
                    }}
                />
            </div>
            {/* 거북이 이미지 */}
            <img src={speakingTurtle} className="w-[200px] m-auto z-10 mt-4" />
        </div>
    );
};

export default Balloon;
