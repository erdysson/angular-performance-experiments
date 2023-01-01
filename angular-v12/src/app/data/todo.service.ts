import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo, TodoListServerResponse } from './data.interface';
import { DataService } from './data.service';

@Injectable()
export class TodoService extends DataService {
    getTodos(): Observable<TodoListServerResponse> {
        return this.http.get<TodoListServerResponse>(`${this.baseUrl}/todos/`);
    }

    searchTodos(query: string): Observable<TodoListServerResponse> {
        return this.http.get<TodoListServerResponse>(`${this.baseUrl}/todos/search?q=${query}`);
    }

    getTodo(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
    }

    getUserTodos(userId: number): Observable<TodoListServerResponse> {
        return this.http.get<TodoListServerResponse>(`${this.baseUrl}/users/${userId}/todos`);
    }
}
