import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { mergeAndUpdate } from '../utils/merge-and-update';

import { Comment, CommentListServerResponse } from './comment.interface';

@Injectable()
export class CommentService {
    constructor(protected readonly http: HttpClient) {}

    getForPost(id: number): Comments {
        return new Comments(id, this.http);
    }
}

export class Comments {
    readonly comments$ = new BehaviorSubject<Comment[]>([]);

    protected readonly baseUrl = 'https://dummyjson.com/comments';

    constructor(private readonly postId: number, private readonly http: HttpClient) {}

    getComments(): void {
        this.http
            .get<CommentListServerResponse>(`${this.baseUrl}/post/${this.postId}`)
            .subscribe((comments) =>
                this.comments$.next(comments.comments.map((comment) => mergeAndUpdate(comment, {}))),
            );
    }

    getComment(id: number): void {
        this.http
            .get<Comment>(`${this.baseUrl}/${id}`)
            .subscribe((updatedComment) =>
                this.comments$.next(this.comments$.value.map((comment) => mergeAndUpdate(comment, updatedComment))),
            );
    }

    updateComment(commentId: number, update: Partial<Comment>): void {
        this.http
            .patch<Comment>(`${this.baseUrl}/${commentId}`, update)
            .subscribe((updatedComment) =>
                this.comments$.next(this.comments$.value.map((comment) => mergeAndUpdate(comment, updatedComment))),
            );
    }

    deleteComment(commentId: number): void {
        this.comments$.next(this.comments$.value.filter((comment) => comment.id !== commentId));
    }
}
