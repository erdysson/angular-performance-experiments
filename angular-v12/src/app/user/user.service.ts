import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User, UserListServerResponse } from './user.interface';

@Injectable()
export class UserService {
    readonly users$ = new BehaviorSubject<User[]>([]);

    protected readonly baseUrl = 'https://dummyjson.com/users';

    constructor(protected readonly http: HttpClient) {}

    getUsers(limit = 5, skip = 0, fields: Array<keyof User> = []): void {
        let url = `${this.baseUrl}?limit=${limit}&skip=${skip}`;

        if (fields.length > 0) {
            url += `select=${fields.join(',')}`;
        }

        this.http.get<UserListServerResponse>(url).subscribe((users) => {
            this.users$.next(users.users);
        });
    }

    searchUsers(query: string): void {
        this.http.get<UserListServerResponse>(`${this.baseUrl}/search?q=${query}`).subscribe((users) => {
            this.users$.next(users.users);
        });
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/${id}`);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/add`, user);
    }

    updateUser(user: User): void {
        this.http.put<User>(`${this.baseUrl}/${user.id}`, user).subscribe(() => {
            const users = this.users$.value;
            for (let existingUser of users) {
                if (existingUser.id === user.id) {
                    existingUser = { ...existingUser, ...user };
                    break;
                }
            }
            this.users$.next(users);
        });
    }

    deleteUser(userId: number): void {
        this.http.delete<User>(`${this.baseUrl}/${userId}`).subscribe(() => {
            this.users$.next(this.users$.value.filter((user) => user.id !== userId));
        });
    }
}
