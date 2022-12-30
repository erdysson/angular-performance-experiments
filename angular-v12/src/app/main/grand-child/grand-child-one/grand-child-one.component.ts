import { Component, Input } from '@angular/core';

import { ChangeDetectionLogger } from '../../../change-detection-logger/change-detection-logger';

@Component({
    selector: 'app-grand-child-one',
    templateUrl: './grand-child-one.component.html',
    styleUrls: ['./grand-child-one.component.scss'],
})
export class GrandChildOneComponent extends ChangeDetectionLogger {
    name = 'grand-child-one';

    @Input()
    parent!: string;
}
