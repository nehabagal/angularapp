import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './cofirmpasswordValidator';

@Component({
  selector: 'app-assign-reactiveform',
  templateUrl: './assign-reactiveform.component.html',
  styleUrls: ['./assign-reactiveform.component.css']
})
export class AssignReactiveformComponent implements OnInit {
studentForm: FormGroup;
genders = [
  {
    id: '1',
    value: 'Male'
  },
  {
    id: '2',
    value: 'Female'
  }
]
  constructor() { 
    this.createStudentForm();
  }

  ngOnInit() {
  }
createStudentForm()
{
this.studentForm = new FormGroup({
  'firstname': new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
  'lastname': new FormControl('',Validators.maxLength(10)),
  'age': new FormControl('',[Validators.required, Validators.min(17), Validators.max(20)]), //this.ageValidation.bind(this) 
  'emailid': new FormControl('',[Validators.required, Validators.email]),
  'city': new FormControl(''),
  'gender': new FormControl('', Validators.required),
  'password': new FormControl('',Validators.required),
  'cnfpassword': new FormControl('',Validators.required),
   //this.passwordMatch.bind(this)
}
  )
}

/*
passwordMatch(control1: FormControl, control2: FormControl){
if(this.studentForm.get('password').value === this.studentForm.get('cnfpassword').value){
  return {Mismatch: true}
}
return null;
}
/*ValidateAge(control: FormControl){
  var sAge= this.studentForm.get('age').value;
  if (sAge < 'Ten') {
    return {InvalidAge: true};
  }
  return null;
}*/

OnFormSubmit(){
console.log(this.studentForm); 
//console.log(typeof(this.studentForm.get('age').value));

 
}
}
