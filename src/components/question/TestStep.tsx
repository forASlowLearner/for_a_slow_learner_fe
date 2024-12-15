import React from "react";
import Typography from "../common/Typography";
import useTest from "../../hooks/useTest";
import QuizBox from "./QuizBox";

const TestStep = () => {
    const {
        currentQuestion,
        userAnswer,
        isAnswered,
        handleAnswerChange,
        handleSubmitAnswer,
    } = useTest();

    return (
        <div className="mt-6 flex flex-col justify-center">
            <QuizBox>
                <Typography title={currentQuestion.question} type="body5" />
            </QuizBox>

            {currentQuestion.type === "objective" && currentQuestion.options ? (
                <div className="mt-4">
                    {currentQuestion.options.map((option, index) => (
                        <div key={index}>
                            <label>
                                <input
                                    type="radio"
                                    name="answer"
                                    value={option}
                                    checked={userAnswer === option}
                                    onChange={handleAnswerChange}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            ) : (
                <input
                    type="text"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    className="mt-4 p-2 border rounded w-full"
                    placeholder="정답을 입력해주세요"
                />
            )}

            <div className="mt-4 flex justify-center gap-4">
                <button
                    onClick={handleSubmitAnswer}
                    className="px-4 py-2 rounded bg-blue-500 text-white"
                    disabled={isAnswered}
                >
                    {isAnswered ? "답변 제출하기" : "다음 질문"}
                </button>
            </div>
        </div>
    );
};

export default TestStep;
