import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnChanges, OnDestroy {
    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log(`navigation:onInit`);
    }

    ngOnChanges(): void {
        // eslint-disable-next-line no-console
        console.log(`navigation:onChanges`);
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log(`navigation:onDestroy`);
    }
}
