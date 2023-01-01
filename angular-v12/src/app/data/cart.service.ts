import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cart, CartListServerResponse, CartProduct } from './data.interface';
import { DataService } from './data.service';

@Injectable()
export class CartService extends DataService {
    getCarts(): Observable<CartListServerResponse> {
        return this.http.get<CartListServerResponse>(`${this.baseUrl}/carts/`);
    }

    searchCarts(query: string): Observable<CartListServerResponse> {
        return this.http.get<CartListServerResponse>(`${this.baseUrl}/carts/search?q=${query}`);
    }

    getCart(id: number): Observable<Cart> {
        return this.http.get<Cart>(`${this.baseUrl}/carts/${id}`);
    }

    addCart(userId: number, products: CartProduct[]): Observable<Cart> {
        return this.http.post<Cart>(`${this.baseUrl}/carts/add`, {
            userId,
            products,
        });
    }

    updateCart(id: number, products: CartProduct[]): Observable<Cart> {
        return this.http.put<Cart>(`${this.baseUrl}/carts/${id}`, {
            merge: true,
            products,
        });
    }

    deleteCart(id: number): Observable<Cart> {
        return this.http.delete<Cart>(`${this.baseUrl}/carts/${id}`);
    }

    getUserCarts(userId: number): Observable<Cart> {
        return this.http.get<Cart>(`${this.baseUrl}/users/${userId}/carts`);
    }
}
