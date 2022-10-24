export class Contract {
  id: number;
  facility: number;
  customer: number;
  startDate: string;
  endDate: string;
  deposit: number;
  total: number;


  constructor(id: number, facility: number, customer: number, startDate: string, endDate: string,
              deposit: number, total: number) {
    this.id = id;
    this.facility = facility;
    this.customer = customer;
    this.startDate = startDate;
    this.endDate = endDate;
    this.deposit = deposit;
    this.total = total;
  }
}

