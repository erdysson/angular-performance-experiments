import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { mergeAndUpdate } from '../utils/merge-and-update';

import { Post, PostListServerResponse } from './post.interface';

@Injectable()
export class PostService {
    constructor(protected readonly http: HttpClient) {}

    getForUser(id: number): Posts {
        return new Posts(id, this.http);
    }
}

export class Posts {
    readonly posts$ = new BehaviorSubject<Post[]>([]);

    protected readonly baseUrl = 'https://dummyjson.com/posts';

    constructor(private readonly userId: number, private readonly http: HttpClient) {}

    getPosts(): void {
        this.http
            .get<PostListServerResponse>(`${this.baseUrl}/user/${this.userId}`)
            .subscribe((posts) => this.posts$.next(posts.posts.map((post) => mergeAndUpdate(post, {}))));
    }

    getPost(id: number): void {
        this.http
            .get<Post>(`${this.baseUrl}/${id}`)
            .subscribe((updatedPost) =>
                this.posts$.next(this.posts$.value.map((post) => mergeAndUpdate(post, updatedPost))),
            );
    }

    updatePost(postId: number, update: Partial<Post>): void {
        this.http
            .patch<Post>(`${this.baseUrl}/${postId}`, update)
            .subscribe((updatedPost) =>
                this.posts$.next(this.posts$.value.map((post) => mergeAndUpdate(post, updatedPost))),
            );
    }

    deletePost(postId: number): void {
        this.posts$.next(this.posts$.value.filter((post) => post.id !== postId));
    }
}
