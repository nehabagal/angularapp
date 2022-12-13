import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
defaultValue: string= 'Angular';
defaultGender: string ='Male';
genders=[
  {id:'1', value:'Male'},
  {id:'2', value:'Female'},
]
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
    console.log(form);
    console.log(form.value.username);
    
      }
}
