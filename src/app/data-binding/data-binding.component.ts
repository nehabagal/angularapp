import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userName:string = 'Codemind';
  uname;
  getUserName(){
    this.userName='';
  }
show(value){
this.uname=value;
  console.log(value);
  
}
  constructor() { }

  ngOnInit() {
  }

}
