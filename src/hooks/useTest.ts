import { useState } from "react";
import { questions } from "./../mocks/questions";

const useTest = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(e.target.value);
    };

    const handleNextQuestion = () => {
        if (userAnswer === currentQuestion.answer) {
            setCorrectAnswers((prev) => [...prev, userAnswer]);
            setScore(score + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer("");
            setIsAnswered(false);
        } else {
            sendResults();
        }
    };

    const handleSubmitAnswer = () => {
        setIsAnswered(true);
        handleNextQuestion();
    };

    const sendResults = () => {
        const results = {
            answers: correctAnswers,
            score: score,
        };

        fetch("/api/submit-answers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(results),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("결과 전송 성공:", data);
                alert("결과를 제출했습니다!");
            })
            .catch((error) => {
                console.error("결과 전송 실패:", error);
                alert("결과 제출에 실패했습니다.");
            });
    };

    return {
        currentQuestion,
        userAnswer,
        setUserAnswer,
        isAnswered,
        setIsAnswered,
        correctAnswers,
        score,
        handleAnswerChange,
        handleSubmitAnswer,
    };
};

export default useTest;
