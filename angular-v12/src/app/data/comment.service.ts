import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment, CommentListServerResponse } from './data.interface';
import { DataService } from './data.service';

@Injectable()
export class CommentService extends DataService {
    getComments(): Observable<CommentListServerResponse> {
        return this.http.get<CommentListServerResponse>(`${this.baseUrl}/comments/`);
    }

    searchComments(query: string): Observable<CommentListServerResponse> {
        return this.http.get<CommentListServerResponse>(`${this.baseUrl}/comments/search?q=${query}`);
    }

    getComment(id: number): Observable<Comment> {
        return this.http.get<Comment>(`${this.baseUrl}/comments/${id}`);
    }
}
