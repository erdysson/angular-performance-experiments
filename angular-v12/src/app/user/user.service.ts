import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { mergeAndUpdate } from '../utils/merge-and-update';

import { User, UserListServerResponse } from './user.interface';

@Injectable()
export class UserService {
    readonly users$ = new BehaviorSubject<User[]>([]);

    protected readonly baseUrl = 'https://dummyjson.com/users';

    constructor(protected readonly http: HttpClient) {}

    getUsers(limit = 5): void {
        this.http
            .get<UserListServerResponse>(`${this.baseUrl}?limit=${limit}`)
            .subscribe((users) => this.users$.next(users.users.map((user) => mergeAndUpdate(user, {}))));
    }

    getUser(id: number): void {
        this.http
            .get<User>(`${this.baseUrl}/${id}`)
            .subscribe((updatedUser) =>
                this.users$.next(this.users$.value.map((user) => mergeAndUpdate(user, updatedUser))),
            );
    }

    delete(userId: number): void {
        this.http
            .delete<User>(`${this.baseUrl}/${userId}`)
            .subscribe(() => this.users$.next(this.users$.value.filter((user) => user.id !== userId)));
    }
}
