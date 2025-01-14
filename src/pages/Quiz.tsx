// Quiz.tsx
import React from "react";
import MainLayout from "../components/layout/Layout";
import BackGround from "../assets/images/backgroundImg.png";
import ProgressBar from "../components/question/ProgressBar";
import TestStep from "../components/question/TestStep";
import useTest from "../hooks/useTest";

const Quiz = () => {
    const {
        currentQuestionIndex,
        currentQuestion,
        userAnswer,
        isAnswered,
        handleAnswerChange,
        handleNextQuestion,
        handleSubmitAnswer,
    } = useTest();

    return (
        <MainLayout backgroundImage={BackGround}>
            <ProgressBar currentIndex={currentQuestionIndex} totalQuestions={9} />
            <TestStep
                currentQuestion={currentQuestion}
                userAnswer={userAnswer}
                isAnswered={isAnswered}
                handleAnswerChange={handleAnswerChange}
                handleNextQuestion={handleNextQuestion}
                handleSubmitAnswer={handleSubmitAnswer}
            />
        </MainLayout>
    );
};

export default Quiz;
