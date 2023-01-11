import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from '../../../comment/comment.interface';
import { Comments, CommentService } from '../../../comment/comment.service';
import { Post } from '../../post.interface';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit, OnChanges, OnDestroy {
    postCommentService!: Comments;

    comments$!: Observable<Comment[]>;

    toggled = false;

    @Input()
    userId!: number;

    @Input()
    post!: Post;

    constructor(private readonly commentService: CommentService) {}

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(`post-list-item:onInit`);

        this.postCommentService = this.commentService.getForPost(this.post.id);
        this.comments$ = this.postCommentService.comments$;

        this.postCommentService.getComments();
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const change of Object.keys(changes)) {
            const object = changes[change];
            // eslint-disable-next-line no-console
            console.log(
                `post-list-item:onChanges: [${change}]`,
                'has changed from',
                object.previousValue,
                'to',
                object.currentValue,
            );
        }
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log(`post-list-item:onDestroy`);
    }

    toggle(): void {
        this.toggled = !this.toggled;
    }
}
