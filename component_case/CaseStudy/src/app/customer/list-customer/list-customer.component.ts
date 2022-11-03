import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../../model/customer';
import Swal from 'sweetalert2';
import {BehaviorSubject, Observable} from 'rxjs';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  page = 1;
  pageSize = 4;
  customer$: Observable<Customer[]>;
  total$: Observable<number>;

  customerNameDelete: string;

  customerIdDelete: number;

  customerNameSearch = '';
  //
  // customerList: Customer[];
  // customerListPaging: Customer[];
  // curPage = 1;
  // totalPage: number;


  // customerAddressSearch = '';
  // customerPhoneSearch = '';

  mess: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.searchByMore();
  }

  // next(): void {
  //   this.curPage++;
  //   this.customerListPaging = this.customerList.slice((this.curPage - 1) * 5, this.curPage * 5);
  // }
  //
  // previos(): void {
  //   this.curPage--;
  //   this.customerListPaging = this.customerList.slice((this.curPage - 1) * 5, this.curPage * 5);
  // }

  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      this.ngOnInit();
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Customer: ' + this.customerNameDelete
      });
    });

  }

  searchByMore(): void {
    this.customerService.findAllCustomerSearch(this.customerNameSearch, this.page, this.pageSize).subscribe(value => {
      console.log(value);
      this.customer$ = new BehaviorSubject<Customer[]>(value.content);
      this.total$ = new BehaviorSubject<number>(value.totalElements);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Tìm kiếm khách hàng có tên là: ' + this.customerNameSearch);
    });
  }

}



