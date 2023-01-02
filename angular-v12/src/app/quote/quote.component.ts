import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
    readonly quotes$ = this.quoteService.quotes$;

    constructor(private readonly quoteService: QuoteService) {}

    ngOnInit(): void {
        this.quoteService.getQuotes();
    }
}
