import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {

  bookFormGroup: FormGroup;
  bookId: number;
  customerList: Customer[];
  bookList: Book[];

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bookService.findAllCustomer().subscribe(value => {
      this.customerList = value;
      console.log(value);
    });
    this.bookId = Number(this.activatedRoute.snapshot.params.id);
    this.bookService.getById(this.bookId).subscribe(book => {
      this.bookFormGroup = new FormGroup({
        dateOpen: new FormControl(book.dateOpen, Validators.required),
        timeStart: new FormControl(book.timeStart, Validators.required),
        timesOut: new FormControl(book.timesOut, Validators.required),
        sendMoney: new FormControl(book.sendMoney, [Validators.required, Validators.min(10000000)]),
        interested: new FormControl(book.interested, Validators.required),
        free: new FormControl(book.free, Validators.required),
        customer: new FormGroup({
          id: new FormControl(book.customer.id),
          customerName: new FormControl(book.customer.customerName)
        })
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }

  updateBook(id: number) {
    const book = this.bookFormGroup.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'sổ tiết kiệm: ' + book.id
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật sổ tiết kiệm thành công!');
    });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}







