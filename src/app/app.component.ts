import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { DemoService } from './Services/demo.service';
import { PostService } from './Services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data1:any;
  constructor(private _demoService: DemoService, private _postService: PostService){

 }
 
 ngOnInit(): void {this._demoService.getUsersData().subscribe(data => {console.log('getting data from api', data);
 this.data1=data})
this._demoService.getPosts().subscribe(result=>{console.log('posts',result)})
}
 
DeletePost(){
  this._postService.deletePostbyId(1).subscribe(res=>{
    console.log(res);
    
  })
}
  title = 'angularapp';
}
