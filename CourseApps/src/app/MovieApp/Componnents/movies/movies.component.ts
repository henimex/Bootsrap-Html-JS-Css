import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MovieService } from '../../Services/movie.service';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.listMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  listMovies(): void {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = response;
    });
  }
}
