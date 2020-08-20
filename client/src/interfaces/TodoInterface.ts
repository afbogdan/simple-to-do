export interface Todo {
    id: number,
    title: string,
    description? : string | null,
    is_done: boolean,
    deadline: string;
} 

export interface TodoPost {
    title: string,
    description? : string | null,
    deadline: Date;
}

export interface TodoPatch {
    title?: string,
    description? : string | null,
    is_done?: boolean,
    deadline?: Date;
}