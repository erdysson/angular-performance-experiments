import { Component, Input } from '@angular/core';

import { Quote } from '../quote.interface';

@Component({
    selector: 'app-quote-list',
    templateUrl: './quote-list.component.html',
    styleUrls: ['./quote-list.component.scss'],
})
export class QuoteListComponent {
    @Input()
    quotes!: Quote[];
}
