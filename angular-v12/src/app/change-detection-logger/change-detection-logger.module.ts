import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChangeDetectionLoggerDirective } from './change-detection-logger.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [ChangeDetectionLoggerDirective],
    exports: [ChangeDetectionLoggerDirective],
})
export class ChangeDetectionLoggerModule {}
