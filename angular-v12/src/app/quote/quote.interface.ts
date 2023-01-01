import { ServerResponse } from '../app.interface';

export interface Quote {
    quote: string;
    id: number;
    author: string;
}

export interface QuoteListServerResponse extends ServerResponse {
    quotes: Quote[];
}
