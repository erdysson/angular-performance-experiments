import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';

import { ComponentLifecycleLogger } from '../../utils/component-lifecycle-logger';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RxState],
})
export class UserListComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    readonly users$ = this.state.select('users');

    constructor(private readonly state: RxState<{ users: User[] }>, private readonly userService: UserService) {
        super();

        this.state.connect('users', this.userService.users$);
    }

    ngOnInit(): void {
        this.init();

        this.userService.getUsers();
    }

    ngOnChanges(): void {
        this.changes({});
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    trackById(index: number, user: User): number {
        return user.id;
    }
}
