import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookIdSearch = '';
  customerSearch: Customer = {id: 5, customerName: ''};
  customerList: Customer[];

  bookListPaging: Book[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;
  bookIdDelete: number;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {

    this.bookService.findAllCustomer().subscribe(value => {
      console.log(value);
      this.customerList = value;
    });
    this.bookService.findAllBookSearch(this.customerSearch.customerName)
      .subscribe(list => {
        console.log(list);
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.bookService.findBookSearchPaging(this.numberRecord, this.curPage,
      this.customerSearch.customerName).subscribe(pagingList => {
      this.bookListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('page ' + this.curPage);
    });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previos(): void {
    this.curPage--;
    this.ngOnInit();
  }

  getInfoCustomerDelete(bookId: number): void {
    this.bookIdDelete = bookId;
  }

  deleteBook(): void {
    this.bookService.deleteBook(this.bookIdDelete).subscribe(() => {
      // 1 thông báo vip-pro:
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.bookIdDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.curPage = 1;
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Delete book success!');
    });
  }

  searchByMore(): void {
    this.curPage = 1;
    this.ngOnInit();
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
