import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { asObservableSource } from '../utils/as-observable-source';
import { mergeAndUpdate } from '../utils/merge-and-update';

import { Comment, CommentListServerResponse } from './comment.interface';

@Injectable()
export class CommentService {
    protected readonly instances: Partial<{ [key: number]: Comments }> = {};

    constructor(protected readonly http: HttpClient) {}

    getForPost(id: number): Comments {
        if (!this.instances[id]) {
            this.instances[id] = new Comments(id, this.http);
        }

        return this.instances[id] as Comments;
    }
}

export class Comments {
    readonly #comments$ = new BehaviorSubject<Comment[]>([]);

    readonly comments$: Observable<Comment[]> = asObservableSource(this.#comments$, 'comments');

    protected readonly baseUrl = 'https://dummyjson.com/comments';

    constructor(private readonly postId: number, private readonly http: HttpClient) {}

    getComments(): void {
        this.http
            .get<CommentListServerResponse>(`${this.baseUrl}/post/${this.postId}`)
            .subscribe((comments) =>
                this.#comments$.next(comments.comments.map((comment) => mergeAndUpdate(comment, {}))),
            );
    }

    getComment(id: number): void {
        this.http
            .get<Comment>(`${this.baseUrl}/${id}`)
            .subscribe((updatedComment) =>
                this.#comments$.next(this.#comments$.value.map((comment) => mergeAndUpdate(comment, updatedComment))),
            );
    }

    updateComment(commentId: number, update: Partial<Comment>): void {
        this.http
            .patch<Comment>(`${this.baseUrl}/${commentId}`, update)
            .subscribe((updatedComment) =>
                this.#comments$.next(this.#comments$.value.map((comment) => mergeAndUpdate(comment, updatedComment))),
            );
    }

    deleteComment(commentId: number): void {
        this.#comments$.next(this.#comments$.value.filter((comment) => comment.id !== commentId));
    }
}
