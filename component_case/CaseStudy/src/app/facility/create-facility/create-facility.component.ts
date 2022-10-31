import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityFormGroup: FormGroup = new FormGroup({
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });

  facilityTypeList: FacilityType[];
  rentTypeList: RentType[];

  facilityType: FacilityType = {
    id: 4,
    facilityTypeName: ''
  };

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.findAllFacilityType().subscribe(value => {
      this.facilityTypeList = value;
    });

    this.facilityService.findAllRentType().subscribe(value => {
      this.rentTypeList = value;
    });
  }

  submit(): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.addFacility(facility).subscribe(() => {
      this.facilityFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      Swal.fire({
        icon: 'success',
        title: 'Sửa thành công!',
        text: 'Dịch vụ: ' + facility.facilityName
      });
      this.router.navigateByUrl('facility/list');
      console.log('Thêm mới dịch vụ thành công!');
    });
  }

}
