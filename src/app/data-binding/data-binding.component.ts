import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userName:string = 'Codemind';
  getUserName(){
    this.userName='';
  }

  constructor() { }

  ngOnInit() {
  }

}
