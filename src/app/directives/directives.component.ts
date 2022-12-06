import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isShow: boolean = true;  //it is variable used for *ngIf to show or hide DOM Element
  title: string = "Top 3 Movies";
  movies: Movie[] = [{ title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' }, //array of class Movie
  { title: 'Kantara', director: 'Rishabh Shetty', cast: 'Rishabh Shetty', releaseDate: '2022' },
  { title: 'KGF', director: 'Rocky', cast: 'Yash', releaseDate: '2019' }
    ]              
  constructor() { }

  ngOnInit() {
  }

}
