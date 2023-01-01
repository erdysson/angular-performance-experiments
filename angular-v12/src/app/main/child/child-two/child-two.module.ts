import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GrandChildOneModule } from '../../grand-child/grand-child-one/grand-child-one.module';
import { GrandChildTwoModule } from '../../grand-child/grand-child-two/grand-child-two.module';

import { ChildTwoComponent } from './child-two.component';

@NgModule({
    declarations: [ChildTwoComponent],
    exports: [ChildTwoComponent],
    imports: [GrandChildOneModule, GrandChildTwoModule, CommonModule],
})
export class ChildTwoModule {}
