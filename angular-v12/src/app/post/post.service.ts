import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, PostListServerResponse } from './post.interface';

@Injectable()
export class PostService {
    protected baseUrl = 'https://dummyjson.com/posts';

    constructor(protected readonly http: HttpClient) {}

    getPosts(limit = 10, skip = 0, fields: Array<keyof Post> = []): Observable<PostListServerResponse> {
        let url = `${this.baseUrl}?limit=${limit}&skip=${skip}`;

        if (fields.length > 0) {
            url += `select=${fields.join(',')}`;
        }

        return this.http.get<PostListServerResponse>(url);
    }

    searchPosts(query: string): Observable<PostListServerResponse> {
        return this.http.get<PostListServerResponse>(`${this.baseUrl}/search?q=${query}`);
    }

    getPostsByUser(id: number): Observable<PostListServerResponse> {
        return this.http.get<PostListServerResponse>(`${this.baseUrl}/user/${id}`);
    }

    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.baseUrl}/${id}`);
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(`${this.baseUrl}/add`, post);
    }

    updatePost(post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.baseUrl}/${post.id}`, post);
    }

    deletePost(post: Post): Observable<Post> {
        return this.http.delete<Post>(`${this.baseUrl}/${post.id}`);
    }
}
