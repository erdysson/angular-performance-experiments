import { Component, Input } from '@angular/core';

import { ChangeDetectionLogger } from '../../../change-detection-logger/change-detection-logger';

@Component({
    selector: 'app-child-two',
    templateUrl: './child-two.component.html',
    styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent extends ChangeDetectionLogger {
    name = 'child-two';

    @Input()
    pathFromParent!: string;
}
