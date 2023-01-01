import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GrandChildTwoComponent } from './grand-child-two.component';

@NgModule({
    declarations: [GrandChildTwoComponent],
    exports: [GrandChildTwoComponent],
    imports: [CommonModule],
})
export class GrandChildTwoModule {}
