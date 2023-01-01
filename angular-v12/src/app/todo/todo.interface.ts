import { ServerResponse } from '../app.interface';

export interface Todo {
    completed: boolean;
    id: number;
    userId: number;
    todo: string;
}

export interface TodoListServerResponse extends ServerResponse {
    todos: Todo[];
}
