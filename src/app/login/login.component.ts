import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit() {
  }
  checkUser(uname, password){

  var output = this._authService.checkUserNameandPassword(uname, password);
  if(output==true){
    alert('login successful');
    this._route.navigate(['/product']);
  }else{
    alert('Invalid username and password');
  }
// this._route.navigate(['product/laptop']);
// }else
//   alert('Enter valid username and password');
 }
  }

