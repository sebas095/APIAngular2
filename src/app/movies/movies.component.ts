import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor() { }

  ngOnInit() {
    this.movies = [
      {title: 'Toy Story', id: '123'},
      {title: 'Toy Story 2', id: '124'},
      {title: 'Toy Story 3', id: '125'}
    ];
  }

}
