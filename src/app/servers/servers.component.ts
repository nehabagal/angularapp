import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
name:string = 'Codemind';
serverId:number = 37;
serverStatus:string = 'offline';
serverCreationStatus:string = 'serverNotCreated'; 
allowNewServer = false;
imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg';
serverName = 'codemind.com';
  constructor() { 
setTimeout(() => {
  this.allowNewServer = true;
}, 5000);
  }
  ngOnInit() {
  }
getServerStatus(){
  return this.serverStatus;
}
onCreateServer(){
  this.serverCreationStatus = 'serverCreated'; 
}
}
