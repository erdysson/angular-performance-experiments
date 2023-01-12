import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { ComponentLifecycleLogger } from '../../utils/component-lifecycle-logger';
import { User } from '../user.interface';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    @Input()
    user!: User;

    ngOnInit(): void {
        this.init();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changes(changes);
    }

    ngOnDestroy(): void {
        this.destroy();
    }
}
