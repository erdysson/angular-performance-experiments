import { Component, Input } from '@angular/core';

import { ChangeDetectionLogger } from '../../change-detection-logger/change-detection-logger';

@Component({
    selector: 'app-sibling-one',
    templateUrl: './sibling-one.component.html',
    styleUrls: ['./sibling-one.component.scss'],
})
export class SiblingOneComponent extends ChangeDetectionLogger {
    name = 'sibling-one';

    @Input()
    pathFromParent!: string;
}
