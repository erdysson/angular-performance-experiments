import { Component, Input } from '@angular/core';

import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
    @Input()
    user!: User;

    constructor(private readonly userService: UserService) {}

    deleteUser(event: MouseEvent): void {
        event.stopPropagation();
        this.userService.delete(this.user.id);
    }
}
