import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { ComponentLifecycleLogger } from '../../../utils/component-lifecycle-logger';
import { Comment } from '../../comment.interface';
import { Comments, CommentService } from '../../comment.service';

@Component({
    selector: 'app-comment-list-item',
    templateUrl: './comment-list-item.component.html',
    styleUrls: ['./comment-list-item.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListItemComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    postCommentService!: Comments;

    @Input()
    postId!: number;

    @Input()
    comment!: Comment;

    constructor(private readonly commentService: CommentService) {
        super();
    }

    ngOnInit(): void {
        this.init();

        this.postCommentService = this.commentService.getForPost(this.postId);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    refresh(): void {
        this.postCommentService.getComment(this.comment.id);
    }

    delete(): void {
        this.postCommentService.deleteComment(this.comment.id);
    }
}
