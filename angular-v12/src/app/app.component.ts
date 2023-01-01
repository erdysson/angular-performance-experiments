import { Component } from '@angular/core';

import { appRoutes } from './app.routes';
import { ChangeDetectionLogger } from './change-detection-logger/change-detection-logger';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ChangeDetectionLogger {
    appRoutes = appRoutes;

    name = 'app';

    pathFromParent = null;
}
