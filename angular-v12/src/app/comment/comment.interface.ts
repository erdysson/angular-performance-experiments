import { ServerResponse } from '../app.interface';

export interface CommentUser {
    id: number;
    username: string;
}

export interface Comment {
    body: string;
    id: number;
    postId: number;
    user: CommentUser;

    lastUpdated?: string;
}

export interface CommentListServerResponse extends ServerResponse {
    comments: Comment[];
}
