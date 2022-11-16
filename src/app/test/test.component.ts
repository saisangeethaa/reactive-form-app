import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //Create FormGroup
  requiredForm: any;

  constructor(private fb: FormBuilder) {

    this.myForm();
   }

   //Create required field validator for name
   myForm() {
    this.requiredForm = this.fb.group({
    name: ['', Validators.required ]
    });
 }
  ngOnInit(): void {
  }

}
