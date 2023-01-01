import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo, TodoListServerResponse } from './todo.interface';

@Injectable()
export class TodoService {
    protected baseUrl = 'https://dummyjson.com/todos';

    constructor(protected readonly http: HttpClient) {}

    getTodos(limit = 10, skip = 0, fields: Array<keyof Todo> = []): Observable<TodoListServerResponse> {
        let url = `${this.baseUrl}?limit=${limit}&skip=${skip}`;

        if (fields.length > 0) {
            url += `select=${fields.join(',')}`;
        }

        return this.http.get<TodoListServerResponse>(url);
    }

    searchTodos(query: string): Observable<TodoListServerResponse> {
        return this.http.get<TodoListServerResponse>(`${this.baseUrl}/search?q=${query}`);
    }

    getTodosByUser(userId: number): Observable<TodoListServerResponse> {
        return this.http.get<TodoListServerResponse>(`${this.baseUrl}/user/${userId}`);
    }

    getTodo(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.baseUrl}/${id}`);
    }

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(`${this.baseUrl}/add`, todo);
    }

    updateTodo(todo: Partial<Todo>): Observable<Todo> {
        const { id, ...updates } = todo;

        return this.http.patch<Todo>(`${this.baseUrl}/${id}`, updates);
    }

    deleteTodo(todoId: number): Observable<Todo> {
        return this.http.delete<Todo>(`${this.baseUrl}/${todoId}`);
    }
}
