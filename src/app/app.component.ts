import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  catpcheCountOne: number = Math.floor(Math.random() * 10);
  catpcheCountTwo: number = Math.floor(Math.random() * 10);
  result: any;
  userValue: any;

  getRandomCount(myForm: any) {
    this.catpcheCountOne = Math.floor(Math.random() * 10);
    this.catpcheCountTwo = Math.floor(Math.random() * 10);
    this.userValue = ""
    
  }

  submitHandler(myForm: any) {
    this.result = this.catpcheCountOne + this.catpcheCountTwo;
    console.log(this.result, 'correct value');
    
    if (this.result === Number(myForm.value.captche_value)) {
      alert('succesful login');
      console.log(myForm.value.captche_value, 'right value');
    } else {
      alert('Wrong Capcha value');
      console.log(myForm.value.captche_value, 'wrong value');
    }
  }
}
