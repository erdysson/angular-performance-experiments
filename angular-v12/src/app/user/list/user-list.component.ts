import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnChanges, OnDestroy {
    readonly users$ = this.userService.users$;

    constructor(private readonly userService: UserService) {}

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(`user-list:onInit`);

        this.userService.getUsers();
    }

    ngOnChanges(): void {
        // eslint-disable-next-line no-console
        console.log(`user-list:onChanges`);
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log('user-list:onDestroy');
    }

    trackById(index: number, user: User): number {
        return user.id;
    }
}
