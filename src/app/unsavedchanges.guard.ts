import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate<any> {  //used any instead of particular component to make the guard loosely coupled
  canDeactivate(component: any){
if(component.username.dirty){
return window.confirm('You have unsaved changes. Are you still want to navigate?');
}else{
  return true;
}
  }
}
