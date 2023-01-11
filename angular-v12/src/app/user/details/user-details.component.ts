import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { User } from '../user.interface';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input()
    user!: User;

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(`user-details:onInit`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (const change of Object.keys(changes)) {
            const object = changes[change];
            // eslint-disable-next-line no-console
            console.log(
                `user-details:onChanges: [${change}]`,
                'has changed from',
                object.previousValue,
                'to',
                object.currentValue,
            );
        }
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log(`user-details:onDestroy`);
    }
}
