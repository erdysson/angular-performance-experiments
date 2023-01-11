import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from '../../../comment/comment.interface';
import { Comments, CommentService } from '../../../comment/comment.service';
import { Post } from '../../post.interface';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
    postCommentService!: Comments;

    comments$!: Observable<Comment[]>;

    toggled = false;

    @Input()
    userId!: number;

    @Input()
    post!: Post;

    constructor(private readonly commentService: CommentService) {}

    ngOnInit(): void {
        this.postCommentService = this.commentService.getForPost(this.post.id);
        this.comments$ = this.postCommentService.comments$;

        this.postCommentService.getComments();
    }

    toggle(): void {
        this.toggled = !this.toggled;
    }
}
