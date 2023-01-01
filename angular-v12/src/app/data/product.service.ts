import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cart, CartProduct, Product, ProductListServerResponse } from './data.interface';
import { DataService } from './data.service';

@Injectable()
export class ProductService extends DataService {
    getProducts(): Observable<ProductListServerResponse> {
        return this.http.get<ProductListServerResponse>(`${this.baseUrl}/products/`);
    }

    searchProducts(query: string): Observable<ProductListServerResponse> {
        return this.http.get<ProductListServerResponse>(`${this.baseUrl}/products/search?q=${query}`);
    }

    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
    }

    getProductCategories(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/products/categories`);
    }

    getProductsInCategory(category: string): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/products/category/${category}`);
    }

    addProduct(userId: number, product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.baseUrl}/products/add`, product);
    }

    // won't really update in server
    updateProduct(id: number, product: Product): Observable<Cart> {
        return this.http.put<Cart>(`${this.baseUrl}/products/${id}`, product);
    }

    // won't really delete in server
    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}/products/${id}`);
    }
}
