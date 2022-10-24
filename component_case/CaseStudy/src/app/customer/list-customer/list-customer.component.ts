import { Component, OnInit } from '@angular/core';
import {Customer} from '../../customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customerList = new Array();

  constructor() {
  }

  ngOnInit(): void {

    this.customerList.push(new Customer('Văn Nam', 1, '1993-01-10', 1, '0123456', '4564545', 'nam123@gmail.com', 'Quảng Nam'));
    this.customerList.push(new Customer('Văn Phú', 1, '1992-01-10', 1, '0123456', '4564545', 'phu123@gmail.com', 'Nghệ An'));
    this.customerList.push(new Customer('Thủy Tiên', 2, '2000-01-10', 0, '0123456', '4564545', 'tien123@gmail.com', 'Quảng Nam'));
    this.customerList.push(new Customer('Bùi Hùng', 3, '1993-01-10', 0, '0123456', '4564545', 'hung123@gmail.com', 'Quảng Nam'));
    this.customerList.push(new Customer('Văn Phúc', 4, '1998-01-10', 0, '0123456', '4564545', 'phuc123@gmail.com', 'Nghệ An'));
    this.customerList.push(new Customer('Đại Lợi', 3, '1997-01-10', 0, '0123456', '4564545', 'loi123@gmail.com', 'Đà Nẵng'));
  }

  // findAll(): Customer[] {
  //   return this.customerList;
  // }

}
