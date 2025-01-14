import React from "react";
import progressBarImg from "../../assets/images/progressBar.png";
import progressBtnImg from "../../assets/images/progressBtn.png";

interface ProgressBarProps {
    currentIndex: number;
    totalQuestions: number;
}

const ProgressBar = ({ currentIndex, totalQuestions }: ProgressBarProps) => {
    const progressPercentage = ((currentIndex + 1) / totalQuestions) * 90; // 진행률 계산

    return (
        <div className="relative w-full h-8 mt-6">
            <div
                className="absolute top-[23%] left-[4px] h-[15px] bg-[#6DA457] transition-all duration-300 ease-in-out z-20"
                style={{width: `${progressPercentage}%`}}
            ></div>

            <img
                src={progressBarImg}
                alt="Progress Bar"
                className="w-full h-8 relative z-10"
            />

            <img
                src={progressBtnImg}
                alt="Progress Button"
                className="absolute top-0.5 transform -translate-x-1/2 z-30 transition-all duration-300 ease-in-out"
                style={{
                    left: `${progressPercentage}%`,
                }}
            />
        </div>
    );
};

export default ProgressBar;
