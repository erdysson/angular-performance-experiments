import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { ComponentLifecycleLogger } from '../utils/component-lifecycle-logger';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent extends ComponentLifecycleLogger implements OnInit, OnChanges, OnDestroy {
    ngOnInit(): void {
        this.init();
    }

    ngOnChanges(): void {
        this.changes({});
    }

    ngOnDestroy(): void {
        this.destroy();
    }
}
