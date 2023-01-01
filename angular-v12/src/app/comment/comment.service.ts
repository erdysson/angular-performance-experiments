import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment, CommentListServerResponse } from './comment.interface';

@Injectable()
export class CommentService {
    protected readonly baseUrl = 'https://dummyjson.com/comments';

    constructor(protected readonly http: HttpClient) {}

    getComments(limit = 10, skip = 0, fields: Array<keyof Comment> = []): Observable<CommentListServerResponse> {
        let url = `${this.baseUrl}?limit=${limit}&skip=${skip}`;

        if (fields.length > 0) {
            url += `select=${fields.join(',')}`;
        }

        return this.http.get<CommentListServerResponse>(url);
    }

    searchComments(query: string): Observable<CommentListServerResponse> {
        return this.http.get<CommentListServerResponse>(`${this.baseUrl}/search?q=${query}`);
    }

    getCommentsByPost(postId: number): Observable<CommentListServerResponse> {
        return this.http.get<CommentListServerResponse>(`${this.baseUrl}/post/${postId}`);
    }

    getComment(id: number): Observable<Comment> {
        return this.http.get<Comment>(`${this.baseUrl}/${id}`);
    }

    addComment(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(`${this.baseUrl}/add`, comment);
    }

    updateComment(comment: Comment): Observable<Comment> {
        return this.http.put<Comment>(`${this.baseUrl}/${comment.id}`, comment);
    }

    deleteComment(commentId: number): Observable<Comment> {
        return this.http.delete<Comment>(`${this.baseUrl}/${commentId}`);
    }
}
