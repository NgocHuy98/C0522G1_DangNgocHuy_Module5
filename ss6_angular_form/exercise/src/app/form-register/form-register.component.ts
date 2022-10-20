import {Component, OnInit} from '@angular/core';
import {Register} from '../register';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../country';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  countryList = [];
  register: Register;

  constructor() {
  }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]),
      email: new FormControl('', [Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.minLength(6), Validators.required], this.checkPassword),
        passwordConfirm: new FormControl('', [Validators.minLength(6), Validators.required])
      }),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),

    });

    // this.register = new Register('Huynh Nam', 'nam11@gmail.com', '1234', '1234', 'Quang Nam', 30, 1, '09215555');
    this.countryList.push(new Country(1, 'Viet Nam'));
    this.countryList.push(new Country(2, 'Lao'));
  }

  getValueRegister(): void {
    console.log(this.registerFormGroup.value);
  }

  checkPassword(abstractControl: AbstractControl): any {
    const passwordGroup = abstractControl.value;
    return (passwordGroup.password === passwordGroup.passwordConfirm) ? null : {notSame: true};
  }
}
