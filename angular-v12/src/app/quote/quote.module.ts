import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuoteListItemComponent } from './list/list-item/quote-list-item.component';
import { QuoteListComponent } from './list/quote-list.component';
import { QuoteComponent } from './quote.component';
import { QuoteService } from './quote.service';

@NgModule({
    imports: [CommonModule],
    declarations: [QuoteComponent, QuoteListComponent, QuoteListItemComponent],
    exports: [QuoteComponent],
    providers: [QuoteService],
})
export class QuoteModule {}
