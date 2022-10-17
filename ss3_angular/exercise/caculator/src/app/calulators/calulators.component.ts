import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calulators',
  templateUrl: './calulators.component.html',
  styleUrls: ['./calulators.component.css']
})
export class CalulatorsComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculation(option: string): any {
    switch (option) {
      case 'add':
        return this.result = Number(this.firstNumber) + Number(this.secondNumber);
        break;
      case 'sub':
        return this.result = Number(this.firstNumber) - Number(this.secondNumber);
        break;
      case 'mul':
        return this.result = Number(this.firstNumber) * Number(this.secondNumber);
        break;
      case 'div':
        if (this.secondNumber === 0) {
          return this.result = 'Not division by 0';
        }
        return this.result = Number(this.firstNumber) / Number(this.secondNumber);
        break;
    }
  }

}
