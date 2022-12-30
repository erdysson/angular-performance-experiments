import { Component, Input } from '@angular/core';

import { ChangeDetectionLogger } from '../../../change-detection-logger/change-detection-logger';

@Component({
    selector: 'app-child-one',
    templateUrl: './child-one.component.html',
    styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent extends ChangeDetectionLogger {
    name = 'child-one';

    @Input()
    parent!: string;
}
