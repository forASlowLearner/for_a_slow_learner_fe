import React from "react";
import Typography from "../common/Typography";
import QuizBox from "./QuizBox";
import Button from "../common/Button";

interface TestStepProps {
    currentQuestion: any;
    userAnswer: string;
    isAnswered: boolean;
    handleAnswerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNextQuestion: () => void;
    handleSubmitAnswer: () => void;
}

const TestStep: React.FC<TestStepProps> = ({
                                               currentQuestion,
                                               userAnswer,
                                               isAnswered,
                                               handleAnswerChange,
                                               handleNextQuestion,
                                               handleSubmitAnswer,
                                           }) => {
    return (
        <div className="mt-16 flex flex-col justify-center">
            <QuizBox>
                <Typography title={currentQuestion.question} type="body5" />
            </QuizBox>

            {currentQuestion.type === "objective" && currentQuestion.options ? (
                <div className="flex flex-col mt-12">
                    {currentQuestion.options.map((option: string, index: number) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerChange({ target: { value: option } } as React.ChangeEvent<HTMLInputElement>)}
                            className={`${
                                userAnswer === option
                                    ? "bg-[#919191] text-white"
                                    : "bg-white text-[#919191]"
                            } rounded-md px-4 py-2 my-[4px] focus:outline-none cursor-pointer`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <input
                    type="text"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    className="mt-8 p-2 border rounded w-full"
                    placeholder="정답을 입력해주세요"
                />
            )}

            <div className="mt-4 flex justify-center gap-4">
                <Button
                    onClick={isAnswered ? handleSubmitAnswer : handleNextQuestion}
                    color="green"
                    className="px-4 rounded"
                    disabled={isAnswered}
                >
                    {isAnswered ? "답변 제출하기" : "다음 질문"}
                </Button>
            </div>
        </div>
    );
};

export default TestStep;
