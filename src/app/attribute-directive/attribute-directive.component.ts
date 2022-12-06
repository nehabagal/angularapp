import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
colorVal = 'blue';
people:any[]=[
  {
    "name":"Jack",
    "country":"UK"
  },
  {"name":"Sumit",
  "country":"USA" },
  {
    "name":"Anup",
    "country":"HK"
  },
  {
    "name":"Codemind",
    "country":"UK"
  },
  {
    "name":"Surya",
    "country":"USA"
  },
]
  constructor() { }

  ngOnInit() {
  }

}
