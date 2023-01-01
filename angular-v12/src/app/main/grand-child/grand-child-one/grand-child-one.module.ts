import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GrandChildOneComponent } from './grand-child-one.component';

@NgModule({
    declarations: [GrandChildOneComponent],
    exports: [GrandChildOneComponent],
    imports: [CommonModule],
})
export class GrandChildOneModule {}
