import { NgModule } from '@angular/core';

import { GrandChildTwoComponent } from './grand-child-two.component';

@NgModule({
    declarations: [GrandChildTwoComponent],
    exports: [GrandChildTwoComponent],
})
export class GrandChildTwoModule {}
