export interface Question {
    id: number;
    type: "objective" | "subjective";
    question: string;
    options?: string[];
    answer: string;
}
