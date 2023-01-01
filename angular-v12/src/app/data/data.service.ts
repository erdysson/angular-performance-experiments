import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    protected baseUrl = 'https://dummyjson.com';

    constructor(protected readonly http: HttpClient) {}
}
