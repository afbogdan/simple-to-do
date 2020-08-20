export interface Todo {
    id: number,
    title: string,
    description? : string | null,
    isDone: boolean,
    deadline: string;
} 

export interface TodoPost {
    title: string,
    description? : string | null,
    deadline: Date;
}