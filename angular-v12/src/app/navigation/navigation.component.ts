import { Component } from '@angular/core';

import { appRoutes } from '../app.routes';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    readonly appRoutes = appRoutes;
}
