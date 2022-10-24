import {Injectable} from '@angular/core';
import {Facility} from '../facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {

  facilityList = new Array();

  constructor() {
    this.facilityList.push(new Facility(1, 'PenHouse Đà Lạt', 100, 2000, 2, 3, 2, 'vip', 'có tủ lạnh', 100, 1, 'Không'));
    this.facilityList.push(new Facility(2, 'BathRoom Lakonku', 100, 3000, 2, 2, 3, 'vip', 'có tủ lạnh', 100, 1, 'Không'));
    this.facilityList.push(new Facility(3, 'Mandar Palace', 300, 7000, 10, 1, 1, 'vip', 'đầy đủ', 100, 3, 'Không'));
    this.facilityList.push(new Facility(4, 'Murharang Kingdom', 500, 10000, 20, 1, 1, 'vip', 'đầy đủ', 100, 2, 'Không'));
    this.facilityList.push(new Facility(5, 'Brenfodd Villa', 200, 5000, 5, 3, 1, 'vip', 'đầy đủ', 100, 2, 'Không'));
    this.facilityList.push(new Facility(6, 'Alexander Villa', 200, 5000, 5, 3, 1, 'vip', 'đầy đủ', 100, 2, 'Không'));
  }

  findAll(): Facility[] {
    return this.facilityList;
  }
}
