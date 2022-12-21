import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-assign-templte-form',
  templateUrl: './assign-templte-form.component.html',
  styleUrls: ['./assign-templte-form.component.css']
})
export class AssignTemplteFormComponent implements OnInit {
  defaultValue: string = "Angular";
  submit: boolean = false;
  //minDate: any= "2022-12-14"
  minDate: any = " ";
  student = new Student();

  constructor() { }
  
  ngOnInit() {
this.getDate();    
console.log(this.minDate);

  }
onSubmit(form: NgForm){
  this.submit=true;
  this.student.username = form.value.username;
  this.student.email = form.value.email;
  this.student.course = form.value.course;
console.log(form.value);

}
getDate(){
  var date: any = new Date();
  var toDate: any = date.getDate();
  if(toDate<10){
    toDate = '0' + toDate;
  }
  var month: any = date.getMonth() + 1;
  if(month<10){
    month = '0' + month;
  }
  var year: any = date.getFullYear();
  this.minDate = year + "-" + month + "-" + toDate;
}
}
