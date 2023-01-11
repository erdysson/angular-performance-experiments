import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { Comment } from '../../comment.interface';

@Component({
    selector: 'app-comment-list-item',
    templateUrl: './comment-list-item.component.html',
    styleUrls: ['./comment-list-item.component.scss'],
})
export class CommentListItemComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    comment!: Comment;

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(`comment-list-item:onInit`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const change of Object.keys(changes)) {
            const object = changes[change];
            // eslint-disable-next-line no-console
            console.log(
                `comment-list-item:onChanges: [${change}]`,
                'has changed from',
                object.previousValue,
                'to',
                object.currentValue,
            );
        }
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log(`comment-list-item:onDestroy`);
    }
}
