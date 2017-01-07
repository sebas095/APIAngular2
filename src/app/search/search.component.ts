import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: string;

  constructor(private service: MoviesService) { }

  ngOnInit() {
  }

  search() {
    this.service.search(this.keyword);
  }

}
