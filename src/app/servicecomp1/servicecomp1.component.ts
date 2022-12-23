import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
  product: {}
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
this.product =   this._demoService.products;
  }
  OnSubscribe(){
    this._demoService.display();
  }
}
