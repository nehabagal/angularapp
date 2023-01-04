import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
//userName = new Subject<any>();  //subject, we cannot assign initial value
userName = new BehaviorSubject<any>('Angular UI Developer'); //BehaviourSubject, we can assign initial value to all where the service is subscribed
  constructor() { }
}
