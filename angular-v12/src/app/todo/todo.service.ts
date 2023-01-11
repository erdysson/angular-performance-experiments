import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { mergeAndUpdate } from '../utils/merge-and-update';

import { Todo, TodoListServerResponse } from './todo.interface';

@Injectable()
export class TodoService {
    protected readonly instances: { [key: number]: Todos } = {};

    constructor(private readonly http: HttpClient) {}

    getForUser(id: number): Todos {
        this.instances[id] = new Todos(id, this.http);

        return this.instances[id];
    }
}

export class Todos {
    readonly todos$ = new BehaviorSubject<Todo[]>([]);

    protected readonly baseUrl = `https://dummyjson.com/todos`;

    constructor(private readonly userId: number, private readonly http: HttpClient) {}

    getTodos(): void {
        this.http
            .get<TodoListServerResponse>(`${this.baseUrl}/user/${this.userId}`)
            .subscribe((todos) => this.todos$.next(todos.todos.map((todo) => mergeAndUpdate(todo, {}))));
    }

    getTodo(id: number): void {
        this.http
            .get<Todo>(`${this.baseUrl}/${id}`)
            .subscribe((updatedTodo) =>
                this.todos$.next(this.todos$.value.map((todo) => mergeAndUpdate(todo, updatedTodo))),
            );
    }

    updateTodo(todoId: number, update: Partial<Todo>): void {
        this.http
            .patch<Todo>(`${this.baseUrl}/${todoId}`, update)
            .subscribe((updatedTodo) =>
                this.todos$.next(this.todos$.value.map((todo) => mergeAndUpdate(todo, updatedTodo))),
            );
    }

    deleteTodo(todoId: number): void {
        this.todos$.next(this.todos$.value.filter((todo) => todo.id !== todoId));
    }
}
