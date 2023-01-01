import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    readonly users$ = this.userService.users$;

    constructor(private readonly userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUsers();
    }
}
