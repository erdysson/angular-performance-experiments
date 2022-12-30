import { Component, Input } from '@angular/core';

import { ChangeDetectionLogger } from '../../../change-detection-logger/change-detection-logger';

@Component({
    selector: 'app-grand-child-two',
    templateUrl: './grand-child-two.component.html',
    styleUrls: ['./grand-child-two.component.scss'],
})
export class GrandChildTwoComponent extends ChangeDetectionLogger {
    name = 'grand-child-two';

    @Input()
    parent!: string;
}
