import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-pipe',
  templateUrl: './assign-pipe.component.html',
  styleUrls: ['./assign-pipe.component.css']
})
export class AssignPipeComponent implements OnInit {
person=[{
  id: 101,
  name: 'Shweta',
  gender: 'Female',
  dob: '02/12/1993',
  company: 'Capgemini',
  sal: '70000'
},
{
  id: 102,
  name: 'Dipak',
  gender: 'Male',
  dob: '12/03/1995',
  company: 'Infosys',
  sal: '90000'
},
{
  id: 103,
  name: 'Ritika',
  gender: 'Female',
  dob: '25/11/1991',
  company: 'TCS',
  sal: '95000'
},
{
  id: 104,
  name: 'Aditya',
  gender: 'Male',
  dob: '29/05/1990',
  company: 'Wipro',
  sal: '75000'
},
{
  id: 105,
  name: 'Vihan',
  gender: 'Male',
  dob: '18/08/1994',
  company: 'Capgemini',
  sal: '85000'
}]
  constructor() { }

  ngOnInit() {
  }

}
