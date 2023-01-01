import { Component, Input } from '@angular/core';

import { Post } from '../post.interface';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
    @Input()
    posts!: Post[];
}
