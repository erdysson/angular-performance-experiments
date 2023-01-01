import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Comment } from '../../../comment/comment.interface';
import { CommentService } from '../../../comment/comment.service';
import { Post } from '../../post.interface';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
    comments$ = new BehaviorSubject<Comment[]>([]);

    @Input()
    post!: Post;

    constructor(private readonly commentService: CommentService) {}

    ngOnInit(): void {
        this.commentService.getCommentsByPost(this.post.id).subscribe((comments) => {
            this.comments$.next(comments.comments);
        });
    }
}
