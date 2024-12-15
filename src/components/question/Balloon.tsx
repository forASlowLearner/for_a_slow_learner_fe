import React from "react";
import speakingTurtle from './../../assets/images/speakingTurtle.png';

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
        <div className="text-center">
            <div className={`relative ${color} p-8 rounded-xl shadow-md max-w-sm mt-[100px] mb-[60px]`}>
            <span
                className={`absolute bottom-[-8px] ${arrowPositionClass[arrowPosition]} w-4 h-4 ${color} shadow-md rotate-45`}
            />
                {children}
            </div>
            <img src={speakingTurtle} className="w-[200px] m-auto"/>
        </div>
    );
};

export default Balloon;
