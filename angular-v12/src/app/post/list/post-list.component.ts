import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';

import { User } from '../../user/user.interface';
import { ComponentLifecycleLogger } from '../../utils/component-lifecycle-logger';
import { Post } from '../post.interface';
import { Posts, PostService } from '../post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RxState],
})
export class PostListComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    userPostService!: Posts;

    posts$!: Observable<Post[]>;

    @Input()
    user!: User;

    constructor(private readonly state: RxState<{ posts: Post[] }>, private readonly postService: PostService) {
        super();
    }

    ngOnInit(): void {
        this.init();

        this.userPostService = this.postService.getForUser(this.user.id);

        this.state.connect('posts', this.userPostService.posts$);

        this.posts$ = this.state.select('posts');

        this.userPostService.getPosts();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    trackById(index: number, post: Post): number {
        return post.id;
    }
}
