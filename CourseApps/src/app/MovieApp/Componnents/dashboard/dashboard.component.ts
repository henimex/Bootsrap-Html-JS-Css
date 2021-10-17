import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  movieLength: number;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
    this.movieService.getMovie(1);
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = response.slice(0, 5);
      this.movieLength = response.length;
    });
  }


}
