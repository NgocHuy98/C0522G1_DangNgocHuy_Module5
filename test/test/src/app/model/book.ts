import {Customer} from './customer';

export interface Book {
  id?: number;
  dateOpen?: string;
  timeStart?: string;
  timesOut?: string;
  sendMoney?: number;
  interested?: number;
  free?: string;
  customer?: Customer;

}
