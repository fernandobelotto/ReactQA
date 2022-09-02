export type Question = {
    title: string;
    id: string;
    answer: Answer
}

export type Answer = {
    title: string;
    description: string;
    id: string;
}