import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  imports: [ReactiveFormsModule],
  templateUrl: './form-one.html',
  styleUrl: './form-one.scss',
})
export class FormOne {
 //pippo


  // profileForm = new FormGroup({
  //   name: new FormControl("pippo"),
  //   surname: new FormControl("de pippis"),
  //   adress: new FormGroup({
  //     city: new FormControl('topolinia'),
  //     street: new FormControl('corso perrone'),
  //     number: new FormControl(12)
  //   })
  // });

  fb = inject(FormBuilder);
  
  profileForm = this.fb.group({
    name: ['pippo,', Validators.required],
      surname:['de pippis', Validators.maxLength(4)],
      adress: this.fb.group({
        city:['topolinia'],
        street:['corso perrone'],
        number:[12, [Validators.min(1),Validators.required]],
      }),
    aliases: this.fb.array([
      this.fb.control(''),
     
    ]),
    
  })


  submit() {
console.log(this.profileForm.value);

  }

  getAliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
  this.getAliases().controls.push(this.fb.control(''))
  }

  removeAlias(index: number) {
    console.log(index);
    
this.getAliases().removeAt(index);
}


}
