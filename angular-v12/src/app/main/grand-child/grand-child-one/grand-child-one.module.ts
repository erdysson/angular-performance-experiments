import { NgModule } from '@angular/core';

import { GrandChildOneComponent } from './grand-child-one.component';

@NgModule({
    declarations: [GrandChildOneComponent],
    exports: [GrandChildOneComponent],
})
export class GrandChildOneModule {}
