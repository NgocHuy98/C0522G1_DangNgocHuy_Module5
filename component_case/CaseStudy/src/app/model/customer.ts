import {CustomerType} from './customer-type';


export class Customer {
  id: number;
  name: string;
  customerTypeId: CustomerType;
  dateOfBirth: string;
  gender: number;
  idCard: string;
  phone: string;
  email: string;
  address: string;

  constructor(id: number, name: string, customerTypeId: CustomerType, dateOfBirth: string,
              gender: number, idCard: string, phone: string, email: string, address: string) {
    this.id = id;
    this.name = name;
    this.customerTypeId = customerTypeId;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}
