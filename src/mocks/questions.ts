import {Question} from "@/types/question";

export const questions: Question[] = [
    {
        id: 1,
        type: "objective",
        question: "다음 중 서로 연관이 없는 것은 무엇인가요?",
        options: ["사과", "바나나", "토끼", "포도"],
        answer: "토끼",
    },
    {
        id: 2,
        type: "objective",
        question: "3, 6, 9, 12 다음에 올 숫자는 무엇인가요?",
        options: ["15", "16", "18", "21"],
        answer: "15",
    },
    {
        id: 3,
        type: "subjective",
        question: "엄마가 사과를 5개 샀고, 그중 2개를 먹었습니다. 남은 사과는 몇 개인가요?",
        answer: "3",
    },
    {
        id: 4,
        type: "objective",
        question: "다음 중 가장 가벼운 것은 무엇인가요?",
        options: ["자동차", "책", "연필", "냉장고"],
        answer: "연필",
    },
    {
        id: 5,
        type: "subjective",
        question: "1년은 몇 개월로 이루어져 있나요?",
        answer: "12",
    },
    {
        id: 6,
        type: "objective",
        question: "다음 중 동물이 아닌 것은 무엇인가요?",
        options: ["고양이", "강아지", "새", "나무"],
        answer: "나무",
    },
    {
        id: 7,
        type: "subjective",
        question: "밤하늘에 뜨는 큰 천체는 무엇인가요?",
        answer: "달",
    },
    {
        id: 8,
        type: "objective",
        question: "다음 중 뜨거운 성질을 가진 것은 무엇인가요?",
        options: ["얼음", "불", "물", "나무"],
        answer: "불",
    },
    {
        id: 9,
        type: "subjective",
        question: "하루는 몇 시간으로 이루어져 있나요?",
        answer: "24",
    }
];
