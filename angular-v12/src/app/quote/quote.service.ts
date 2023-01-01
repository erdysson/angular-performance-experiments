import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Quote, QuoteListServerResponse } from './quote.interface';

@Injectable()
export class QuoteService {
    readonly qoutes$ = new BehaviorSubject<Quote[]>([]);

    protected readonly baseUrl = 'https://dummyjson.com/quotes';

    constructor(protected readonly http: HttpClient) {}

    getQuotes(): void {
        this.http
            .get<QuoteListServerResponse>(`${this.baseUrl}`)
            .subscribe((quotes) => this.qoutes$.next(quotes.quotes));
    }

    searchQuotes(query: string): void {
        this.http
            .get<QuoteListServerResponse>(`${this.baseUrl}/search?q=${query}`)
            .subscribe((quotes) => this.qoutes$.next(quotes.quotes));
    }

    getQuote(id: number): Observable<Quote> {
        return this.http.get<Quote>(`${this.baseUrl}/${id}`);
    }
}
