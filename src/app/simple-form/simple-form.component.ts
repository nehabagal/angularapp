import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employees } from '../models/employees';
@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  defaultValue: string = 'Angular';
  defaultGender: string = 'Male';
  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
  ]
  employeee = new Employees();
  submitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
    this.submitted = true;
    this.employeee .course = form.value.course;
    this.employeee .username = form.value.userDetails.username;
    this.employeee .email = form.value.userDetails.email;
    this.employeee.gender = form.value.gender;
form.reset(); //to reset the form
form.controls['course'].setValue('Angular');  //to assign default value after form reset, form.controls['course'] used to get value of control
form.controls['gender'].setValue('Male'); //to assign default value after form reset
   this.saveEmployeeData(this.employeee);
  }

  saveEmployeeData(emp:Employees) {
   console.log(emp.course);
  }
  /*OnSubmit(form: NgForm) {
    this.employee1 .username = form.value.userDetails.username;
    var emp= new Employees();
    emp.username = form.value.userDetails.username;
    emp.email = form.value.userDetails.email;
    emp.course = form.value.course;
    emp.gender = form.value.gender;
  console.log(form);*/
    
  }
  

