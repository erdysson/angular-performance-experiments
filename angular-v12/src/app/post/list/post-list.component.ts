import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Post } from '../post.interface';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    userId!: number;

    @Input()
    posts!: Post[];

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(`post-list:onInit`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const change of Object.keys(changes)) {
            const object = changes[change];
            // eslint-disable-next-line no-console
            console.log(
                `post-list:onChanges: [${change}]`,
                'has changed from',
                object.previousValue,
                'to',
                object.currentValue,
            );
        }
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log(`post-list:onDestroy`);
    }
}
