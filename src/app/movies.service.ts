import { Injectable } from '@angular/core';
import { Movie } from './movies/movie';

@Injectable()
export class MoviesService {
  movies: Movie[];

  constructor() {
    this.movies = [
      {title: 'Toy Story', id: '123'},
      {title: 'Toy Story 2', id: '124'},
      {title: 'Toy Story 3', id: '125'}
    ];
  }
}
