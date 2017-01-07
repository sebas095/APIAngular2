import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡Funciona la App!';

  constructor(private service: MoviesService) { }

  agregarPelicula() {
    this.service.movies.push({
      title: 'Frozen',
      id: 'sdasda12'
    });
  }
}
