import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChildOneModule } from '../child/child-one/child-one.module';
import { ChildTwoModule } from '../child/child-two/child-two.module';

import { SiblingTwoComponent } from './sibling-two.component';

@NgModule({
    declarations: [SiblingTwoComponent],
    exports: [SiblingTwoComponent],
    imports: [ChildOneModule, ChildTwoModule, CommonModule],
})
export class SiblingTwoModule {}
