import { Component, Input } from '@angular/core';

import { Quote } from '../../quote.interface';

@Component({
    selector: 'app-quote-list-item',
    templateUrl: './quote-list-item.component.html',
    styleUrls: ['./quote-list-item.component.scss'],
})
export class QuoteListItemComponent {
    @Input()
    quote!: Quote;
}
