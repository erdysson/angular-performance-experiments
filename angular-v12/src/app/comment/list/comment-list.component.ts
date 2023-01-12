import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../post/post.interface';
import { ComponentLifecycleLogger } from '../../utils/component-lifecycle-logger';
import { Comment } from '../comment.interface';
import { Comments, CommentService } from '../comment.service';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    postCommentService!: Comments;

    comments$!: Observable<Comment[]>;

    toggled = false;

    @Input()
    post!: Post;

    constructor(private readonly commentService: CommentService) {
        super();
    }

    ngOnInit(): void {
        this.init();

        this.postCommentService = this.commentService.getForPost(this.post.id);

        this.comments$ = this.postCommentService.comments$;

        this.postCommentService.getComments();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    toggle(): void {
        this.toggled = !this.toggled;
    }
}
