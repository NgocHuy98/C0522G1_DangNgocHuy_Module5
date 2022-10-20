import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor() { }

  loginFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
          gmail: new FormControl('', [Validators.re, Validators.email]),
          password: new FormControl('', [Validators.minLength(6)])
        }
    );
  }

}
