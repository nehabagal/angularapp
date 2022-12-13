import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent-compo',
  templateUrl: './parent-compo.component.html',
  styleUrls: ['./parent-compo.component.css']
})
export class ParentCompoComponent implements OnInit {
employeeRecords: any=[
  {eName:'Jack',eDepartment:'IT',eSalary:70000,eCity:'Pune'},
  {eName:'Jenny',eDepartment:'HR',eSalary:50000,eCity:'Mumbai'}
]
  constructor() { }
  ngOnInit() {
  }

}
