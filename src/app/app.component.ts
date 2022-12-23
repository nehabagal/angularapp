import { Component, OnInit } from '@angular/core';
import { DemoService } from './Services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data1:any;
  constructor(private _demoService: DemoService){

 }
 
 ngOnInit(): void {this._demoService.getUsersData().subscribe(data => {console.log('getting data from api', data);
this.data1=data})}
 
  title = 'angularapp';
}
