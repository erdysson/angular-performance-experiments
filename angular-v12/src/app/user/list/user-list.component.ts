import { Component, Input } from '@angular/core';

import { User } from '../user.interface';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
    @Input()
    users!: User[];

    trackById(index: number, user: User): number {
        return user.id;
    }
}
