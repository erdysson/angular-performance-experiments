import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { asObservableSource } from '../utils/as-observable-source';
import { mergeAndUpdate } from '../utils/merge-and-update';

import { User, UserListServerResponse } from './user.interface';

@Injectable()
export class UserService {
    readonly #users$ = new BehaviorSubject<User[]>([]);

    readonly users$: Observable<User[]> = asObservableSource(this.#users$, 'users');

    protected readonly baseUrl = 'https://dummyjson.com/users';

    constructor(protected readonly http: HttpClient) {}

    getUsers(limit = 3, skip = 0): void {
        this.http
            .get<UserListServerResponse>(`${this.baseUrl}?limit=${limit}&skip=${skip}`)
            .subscribe((users) => this.#users$.next(users.users.map((user) => mergeAndUpdate(user, {}))));
    }

    getUser(id: number): void {
        this.http
            .get<User>(`${this.baseUrl}/${id}`)
            .subscribe((updatedUser) =>
                this.#users$.next(this.#users$.value.map((user) => mergeAndUpdate(user, updatedUser))),
            );
    }

    deleteUser(userId: number): void {
        this.#users$.next(this.#users$.value.filter((user) => user.id !== userId));
    }
}
