import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Models/movie';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() inputSelectedMovie: Movie;
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.movieService.getMovie(id).subscribe((response) => {
    //   this.movie = response;
    // });
    this.movie = this.movieService.getMovie(id)
  }
}
