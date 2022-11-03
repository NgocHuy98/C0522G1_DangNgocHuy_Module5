import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {SearchResult} from '../model/search-result';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_URL: string;
  private API_URL_TYPE: string;


  constructor(private httpClient: HttpClient) {
    this.API_URL = environment.api_url;
    this.API_URL_TYPE = environment.api_url_type;
  }

  findAllCustomer(): Observable<SearchResult<Customer>> {
    return this.httpClient.get<SearchResult<Customer>>(this.API_URL);
  }

  findAllCustomerSearch(nameSearch: string, page: number, size: number): Observable<SearchResult<Customer>> {
    const URL = this.API_URL + 'list' + '?name=' + nameSearch + '&page=' + (page - 1) + '&size=' + size;
    console.log(URL);
    return this.httpClient.get<SearchResult<Customer>>(URL);
  }

  findCustomerSearchPaging(numberRecord: number, curPage: number,
                           nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers?_page=' + curPage + '&_limit=' + numberRecord +
      '&customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + id);
  }

  findAllCustomerType(): Observable<CustomerType[]> {
    console.log(this.API_URL_TYPE);
    return this.httpClient.get<CustomerType[]>(this.API_URL_TYPE );
  }

  addCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL + 'create', customer);
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API_URL + 'edit/' + id, customer);
  }

}
