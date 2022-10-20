import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  notification: string;
  constructor() {
  }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormGroup({
        passwordFirst: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordSecond: new FormControl('')
      }, this.checkPassword),
    });
  }
  getVelue() {
    this.notification = 'Đăng nhập thành công';
    console.log(this.loginFormGroup.value);
  }
  checkPassword(abstractControl: AbstractControl): any {
    const password = abstractControl.value;
    return (password.passwordFirst === password.passwordSecond) ? null : {notSame: true};
  }

}
