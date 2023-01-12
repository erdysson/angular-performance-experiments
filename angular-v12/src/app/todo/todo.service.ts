import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { asObservableSource } from '../utils/as-observable-source';
import { mergeAndUpdate } from '../utils/merge-and-update';

import { Todo, TodoListServerResponse } from './todo.interface';

@Injectable()
export class TodoService {
    protected readonly instances: Partial<{ [key: number]: Todos }> = {};

    constructor(private readonly http: HttpClient) {}

    getForUser(id: number): Todos {
        if (!this.instances[id]) {
            this.instances[id] = new Todos(id, this.http);
        }

        return this.instances[id] as Todos;
    }
}

export class Todos {
    readonly #todos$ = new BehaviorSubject<Todo[]>([]);

    readonly todos$: Observable<Todo[]> = asObservableSource(this.#todos$, `todos-user-${this.userId}`);

    protected readonly todosBaseUrl = `https://dummyjson.com/todos`;

    protected readonly userTodosBaseUrl = `https://dummyjson.com/users/${this.userId}/todos`;

    constructor(private readonly userId: number, private readonly http: HttpClient) {}

    getTodos(): void {
        this.http
            .get<TodoListServerResponse>(this.userTodosBaseUrl)
            .subscribe((todos) => this.#todos$.next(todos.todos.map((todo) => mergeAndUpdate(todo, {}))));
    }

    getTodo(id: number): void {
        this.http
            .get<Todo>(`${this.todosBaseUrl}/${id}`)
            .subscribe((updatedTodo) =>
                this.#todos$.next(this.#todos$.value.map((todo) => mergeAndUpdate(todo, updatedTodo))),
            );
    }

    updateTodo(todoId: number, update: Partial<Todo>): void {
        this.http
            .patch<Todo>(`${this.todosBaseUrl}/${todoId}`, update)
            .subscribe((updatedTodo: Partial<Todo>) =>
                this.#todos$.next(this.#todos$.value.map((todo) => mergeAndUpdate(todo, updatedTodo))),
            );
    }

    deleteTodo(todoId: number): void {
        this.#todos$.next(this.#todos$.value.filter((todo) => todo.id !== todoId));
    }
}
