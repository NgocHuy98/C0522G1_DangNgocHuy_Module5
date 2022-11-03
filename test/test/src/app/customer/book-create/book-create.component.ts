import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookFormGroup: FormGroup = new FormGroup({
    dateOpen: new FormControl('', Validators.required),
    timeStart: new FormControl('', Validators.required),
    timesOut: new FormControl('', Validators.required),
    sendMoney: new FormControl('', [Validators.required, Validators.min(10000000)]),
    interested: new FormControl('', Validators.required),
    free: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    customerName: new FormControl('', [Validators.required, Validators.pattern('^[\\D\\d ]+$')])
  });

  customerList: Customer[];
  minAge = new Date().getFullYear();
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bookService.findAllCustomer().subscribe(value => {
      this.customerList = value;
    });
  }

  submit(): void {
    const book = this.bookFormGroup.value;
    this.bookService.addBook(book).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Thêm mới thành công!',
        text: 'sổ tiết kiệm: ' + book.id,
      });

      this.bookFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm sổ tiết kiệm thành công!');
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }

}
