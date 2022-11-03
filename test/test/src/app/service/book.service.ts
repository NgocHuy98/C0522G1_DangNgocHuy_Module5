import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {Customer} from '../model/customer';
import {SearchResult} from '../model/search-result';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findAllBookSearch(typeSearch: string, idSearch: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL + 'books/' + idSearch + '&customer.customerName_like=' + typeSearch);
  }

  findBookSearchPaging(numberRecord: number, curPage: number,
                       typeSearch: string, idSearch: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL + 'books?_page=' + curPage + '&_limit=' + numberRecord + 'books/' + idSearch +
      '&customer.customerName_like=' + typeSearch);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(this.API_URL + 'books/' + id);
  }

  findAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers');
  }

  addBook(book): Observable<Book> {
    return this.httpClient.post<Book>(this.API_URL + 'books', book);
  }

  getById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(this.API_URL + 'books/' + id);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.API_URL + 'books/' + id, book);
  }
  //
  // paginate(page: number, limit: number): Observable<SearchResult<Book>> {
  //   let api_url = environment.api_url + '/books' + '?_page=' + page + '&_limit=' + limit;
  //   console.log(api_url);
  //   return this.httpClient.get<SearchResult<Book>>(api_url);
  // }

}
