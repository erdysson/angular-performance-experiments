import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GrandChildOneModule } from '../../grand-child/grand-child-one/grand-child-one.module';
import { GrandChildTwoModule } from '../../grand-child/grand-child-two/grand-child-two.module';

import { ChildOneComponent } from './child-one.component';

@NgModule({
    declarations: [ChildOneComponent],
    exports: [ChildOneComponent],
    imports: [GrandChildTwoModule, GrandChildOneModule, CommonModule],
})
export class ChildOneModule {}
