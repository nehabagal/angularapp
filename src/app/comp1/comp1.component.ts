import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../Services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
userName;
  constructor(private _utilityService: UtilityService) { 

    this._utilityService.userName.subscribe(res =>{
      this.userName = res;
    })
  }

  ngOnInit() {
  }
  updateUsername(uname){
console.log(uname.value);
//next method is used to pass value value to observable on change detection
this._utilityService.userName.next(uname.value);
  }
}
