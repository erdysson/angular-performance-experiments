import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, PostListServerResponse } from './data.interface';
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {
    getPosts(limit = 10, skip = 0, fields: Array<keyof Post> = []): Observable<PostListServerResponse> {
        let url = `${this.baseUrl}/posts?limit=${limit}&skip=${skip}`;

        if (fields.length > 0) {
            url += `select=${fields.join(',')}`;
        }

        return this.http.get<PostListServerResponse>(url);
    }

    searchPosts(query: string): Observable<PostListServerResponse> {
        return this.http.get<PostListServerResponse>(`${this.baseUrl}/posts/search?q=${query}`);
    }

    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.baseUrl}/posts/${id}`);
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(`${this.baseUrl}/posts/add`, post);
    }

    updatePost(post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.baseUrl}/posts/${post.id}`, post);
    }

    deletePost(post: Post): Observable<Post> {
        return this.http.delete<Post>(`${this.baseUrl}/posts/${post.id}`);
    }

    getPostsByUser(id: number): Observable<PostListServerResponse> {
        return this.http.get<PostListServerResponse>(`${this.baseUrl}/posts/user/${id}`);
    }

    getComments(id: number): Observable<PostListServerResponse> {
        return this.http.get<PostListServerResponse>(`${this.baseUrl}/posts/${id}/comments`);
    }
}
