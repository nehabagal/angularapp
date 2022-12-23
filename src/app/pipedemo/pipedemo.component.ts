import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  price: number = 80000;
  name: string = 'codemind';
  myNum:number = 4.5;
  todayDate = new Date();
  obj = {id: 101, name: 'codemind'}
  constructor() { }

  ngOnInit() {
  }

}
