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
      res => this.movies = res,
      err => console.log(err)
    );
  }

  getMovies(keyword: string) : Observable<Movie[]> {
    return (
      this
        .http
        .get(`http://www.omdbapi.com/?s=${keyword}`)
        .map(this.parseResponse)
        .catch(() => Observable.throw('Algo salió mal'))
    );
  }

  parseResponse(response: Response) : Movie[] {
    if (!response.json() || !response.json().Search) return [];
    return response.json().Search.map(
      jsonMovie => new Movie(jsonMovie['Title'],
                        jsonMovie['imdbID'],
                        jsonMovie['Year'],
                        jsonMovie['Type'])
    );
  }
}
