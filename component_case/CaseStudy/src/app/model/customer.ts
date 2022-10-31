import {CustomerType} from './contract/model/customer-type';

export class Customer {
  id: number;
  name: string;
  customerType: CustomerType;
  dateOfBirth: string;
  gender: number;
  idCard: string;
  phoneNumber: string;
  email: string;
  address: string;

  constructor(id: number, name: string, customerType: CustomerType, dateOfBirth: string,
              gender: number, idCard: string, phoneNumber: string, email: string, address: string) {
    this.id = id;
    this.name = name;
    this.customerType = customerType;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.idCard = idCard;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }
}
