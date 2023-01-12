import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { BehaviorSubject, Observable } from 'rxjs';

import { Post } from '../../post/post.interface';
import { ComponentLifecycleLogger } from '../../utils/component-lifecycle-logger';
import { Comment } from '../comment.interface';
import { Comments, CommentService } from '../comment.service';

@Component({
    selector: 'app-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RxState],
})
export class CommentListComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    #toggled$ = new BehaviorSubject(false);

    postCommentService!: Comments;

    comments$!: Observable<Comment[]>;

    toggled$ = this.state.select('toggled');

    @Input()
    post!: Post;

    constructor(
        private readonly state: RxState<{ comments: Comment[]; toggled: boolean }>,
        private readonly commentService: CommentService,
    ) {
        super();

        this.state.connect('toggled', this.#toggled$.asObservable());
    }

    ngOnInit(): void {
        this.init();

        this.postCommentService = this.commentService.getForPost(this.post.id);

        this.state.connect('comments', this.postCommentService.comments$);

        this.comments$ = this.state.select('comments');

        this.postCommentService.getComments();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    toggle(): void {
        this.#toggled$.next(!this.#toggled$.value);
    }

    trackById(index: number, comment: Comment): number {
        return comment.id;
    }
}
