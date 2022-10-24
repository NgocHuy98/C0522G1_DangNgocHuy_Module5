import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) {
  }

  findById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + productId);
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  saveInfo(productObj: Product): Observable<void> {
    console.log(productObj.id);
    return this.httpClient.post<void>(this.API_URL, productObj);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(this.API_URL + '/' + id, product);
  }


  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + '/' + id);
  }
}
