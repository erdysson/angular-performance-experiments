import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PostListServerResponse, User, UserListServerResponse } from './data.interface';
import { DataService } from './data.service';

@Injectable()
export class UserService extends DataService {
    getUsers(limit = 10, skip = 0, fields: Array<keyof User> = []): Observable<UserListServerResponse> {
        let url = `${this.baseUrl}/users?limit=${limit}&skip=${skip}`;

        if (fields.length > 0) {
            url += `select=${fields.join(',')}`;
        }

        return this.http.get<UserListServerResponse>(url);
    }

    searchUsers(query: string): Observable<UserListServerResponse> {
        return this.http.get<UserListServerResponse>(`${this.baseUrl}/users/search?q=${query}`);
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/users/${id}`);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/users/add`, user);
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
    }

    deleteUser(userId: number): Observable<User> {
        return this.http.delete<User>(`${this.baseUrl}/users/${userId}`);
    }

    getPosts(userId: number): Observable<PostListServerResponse> {
        return this.http.get<PostListServerResponse>(`${this.baseUrl}/users/${userId}/posts`);
    }
}
