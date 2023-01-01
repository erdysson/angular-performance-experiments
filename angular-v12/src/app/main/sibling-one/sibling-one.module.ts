import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChildOneModule } from '../child/child-one/child-one.module';
import { ChildTwoModule } from '../child/child-two/child-two.module';

import { SiblingOneComponent } from './sibling-one.component';

@NgModule({
    declarations: [SiblingOneComponent],
    exports: [SiblingOneComponent],
    imports: [ChildOneModule, ChildTwoModule, CommonModule],
})
export class SiblingOneModule {}
