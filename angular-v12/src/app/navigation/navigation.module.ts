import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChangeDetectionLoggerModule } from '../change-detection-logger/change-detection-logger.module';

import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [CommonModule, RouterModule, ChangeDetectionLoggerModule],
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
})
export class NavigationModule {}
