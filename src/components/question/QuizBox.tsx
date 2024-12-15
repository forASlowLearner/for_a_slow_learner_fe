import React from "react";
import walkingTurtle from './../../assets/images/walkingTurtle.png';

interface QuizBoxProps {
    children: React.ReactNode;
}

const QuizBox = ({ children }: QuizBoxProps) => {
    return (
        <div className="bg-[#FDFFDB] rounded-md px-8 pt-8 pb-20 relative w-[300px]">
            {children}
            <img
                src={walkingTurtle}
                className="absolute bottom-2 right-2 w-12 h-12"
                alt="걷는 거북이"
            />
        </div>
    );
}

export default QuizBox;
