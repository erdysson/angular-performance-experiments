import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../user/user.interface';

import { Quote, QuoteListServerResponse } from './quote.interface';

@Injectable()
export class QuoteService {
    readonly qoutes$ = new BehaviorSubject<Quote[]>([]);

    protected readonly baseUrl = 'https://dummyjson.com/quotes';

    constructor(protected readonly http: HttpClient) {}

    getQuotes(limit = 5, skip = 0, fields: Array<keyof User> = []): void {
        let url = `${this.baseUrl}?limit=${limit}&skip=${skip}`;

        if (fields.length > 0) {
            url += `select=${fields.join(',')}`;
        }

        this.http.get<QuoteListServerResponse>(url).subscribe((quotes) => this.qoutes$.next(quotes.quotes));
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
