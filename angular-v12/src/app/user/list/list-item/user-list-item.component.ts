import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { ComponentLifecycleLogger } from '../../../utils/component-lifecycle-logger';
import { User } from '../../user.interface';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListItemComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    tab = 'details';

    toggled = false;

    @Input()
    user!: User;

    constructor(private readonly userService: UserService) {
        super();
    }

    ngOnInit(): void {
        this.init();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    switchTab(tab: string): void {
        this.tab = tab;
    }

    toggle(): void {
        this.toggled = !this.toggled;
    }

    refresh(event: MouseEvent): void {
        event.stopPropagation();
        this.userService.getUser(this.user.id);
    }

    delete(event: MouseEvent): void {
        event.stopPropagation();
        this.userService.deleteUser(this.user.id);
    }
}
