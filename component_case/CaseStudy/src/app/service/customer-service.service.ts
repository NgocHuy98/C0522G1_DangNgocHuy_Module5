import { Injectable } from '@angular/core';
import {Customer} from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customerList = new Array();

  constructor() {

  }

  findAll(): Customer[] {
    return this.customerList;
  }
}
