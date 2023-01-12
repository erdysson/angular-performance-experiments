import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { ComponentLifecycleLogger } from '../../../utils/component-lifecycle-logger';
import { Post } from '../../post.interface';
import { Posts, PostService } from '../../post.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListItemComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    userPostService!: Posts;

    @Input()
    userId!: number;

    @Input()
    post!: Post;

    constructor(private readonly postService: PostService) {
        super();
    }

    ngOnInit(): void {
        this.init();

        this.userPostService = this.postService.getForUser(this.userId);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    refresh(): void {
        this.userPostService.getPost(this.post.id);
    }

    delete(): void {
        this.userPostService.deletePost(this.post.id);
    }
}
