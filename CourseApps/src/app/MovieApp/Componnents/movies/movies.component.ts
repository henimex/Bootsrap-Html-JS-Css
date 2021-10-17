import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies = Movies;
  selectedMovie: Movie;
  constructor() {}

  ngOnInit(): void {}

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
