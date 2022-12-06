import { Component, OnInit } from '@angular/core';
import { Courses } from './courses';

@Component({
  selector: 'app-assign-struct-directive',
  templateUrl: './assign-struct-directive.component.html',
  styleUrls: ['./assign-struct-directive.component.css']
})
export class AssignStructDirectiveComponent implements OnInit {
isShow: boolean;
text:string = "This content is displayed because you've checked the checkbox";
courses: Courses[]=[
  {srNo: 1, courseName: 'Front-End Developer', technologyStack:'HTML,CSS,Angular,React, JavaScript'},
  {srNo: 2, courseName: 'Back-End Developer', technologyStack:'Java, .net, python, PHP'},
  {srNo: 3, courseName: 'Automation Testing', technologyStack:'Selenium, postman, TestComplete, Ranorex'}
]
selectedIndustry: String;
  constructor() { }

  ngOnInit() {
  }
  getIndustryValue(value){
    this.selectedIndustry = value.target.value;
  }
}
