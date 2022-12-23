import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
products = {};
  constructor(private _demoservice: DemoService) {
    

   }

  ngOnInit() {
    this.products = this._demoservice.products;
  }
  OnSubcribe(){
    this._demoservice.display();
  }
}
