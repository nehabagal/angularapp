import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.css']
})
export class ChildCompoComponent implements OnInit {

@Input() employeeName: string;
  constructor() { }

  ngOnInit() {

console.log('from parent component',this.employeeName);

  }

}
