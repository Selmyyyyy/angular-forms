import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  imports: [FormsModule],
  templateUrl: './form-two.html',
  styleUrl: './form-two.scss',
})
export class FormTwo {


  name: string = 'paperino'
  surname: string = 'paperoga'
  age: number = 88

  look() {
    console.log(this.name, this.surname, this.age)
  }

  changeName(){
    this.name = 'paperinik'
  }

  submit() {
    console.log(this.name, this.surname, this.age)
  }

}