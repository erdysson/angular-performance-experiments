import { Component, Input } from '@angular/core';

import { ChangeDetectionLogger } from '../../change-detection-logger/change-detection-logger';

@Component({
    selector: 'app-sibling-two',
    templateUrl: './sibling-two.component.html',
    styleUrls: ['./sibling-two.component.scss'],
})
export class SiblingTwoComponent extends ChangeDetectionLogger {
    name = 'sibling-two';

    @Input()
    parent!: string;
}
