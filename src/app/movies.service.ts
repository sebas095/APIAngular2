import { Injectable } from '@angular/core';
import { Movie } from './movies/movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoviesService {
  movies: Movie[];

  constructor(private http: Http) {
    this.movies = [
      {title: 'Toy Story', id: '123'},
      {title: 'Toy Story 2', id: '124'},
      {title: 'Toy Story 3', id: '125'}
    ];
  }

  search(keyword: string) {
    this.getMovies(keyword).subscribe(
      res => console.log(res.json()),
      err => console.log(err)
    );
  }

  getMovies(keyword: string) : Observable<Response> {
    return (
      this
        .http
        .get(`http://www.omdbapi.com/?s=${keyword}`)
        .catch(() => Observable.throw('Algo salió mal'))
    );
  }
}
