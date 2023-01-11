import { ServerResponse } from '../app.interface';

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: number;
    userId: number;
    lastUpdated?: string;
}

export interface PostListServerResponse extends ServerResponse {
    posts: Post[];
}
