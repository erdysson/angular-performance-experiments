import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Quote, QuoteListServerResponse } from './data.interface';
import { DataService } from './data.service';

@Injectable()
export class QuoteService extends DataService {
    getQuotes(): Observable<QuoteListServerResponse> {
        return this.http.get<QuoteListServerResponse>(`${this.baseUrl}/quotes/`);
    }

    searchQuotes(query: string): Observable<QuoteListServerResponse> {
        return this.http.get<QuoteListServerResponse>(`${this.baseUrl}/quotes/search?q=${query}`);
    }

    getQuote(id: number): Observable<Quote> {
        return this.http.get<Quote>(`${this.baseUrl}/quotes/${id}`);
    }
}
