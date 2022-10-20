export class Customer {
  name: string;
  customerType: number;
  dateOfBirth: string;
  gender: number;
  idCard: string;
  phoneNumber: string;
  email: string;
  address: string;

  constructor(name: string, customerType: number, dateOfBirth: string, gender: number,
              idCard: string, phoneNumber: string, email: string, address: string) {
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
