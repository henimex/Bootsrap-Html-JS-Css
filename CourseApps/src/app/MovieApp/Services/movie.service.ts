import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/Models/movie';
import { Movies } from '../Componnents/movie.datasource';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(
    private loggingService: LoggingService,
    private http: HttpClientModule
  ) {}

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService : Movies Listed');
    return of(Movies);
  }

  getMovie(movieId: number) {
    this.loggingService.add(`MovieService : Movie (${movieId}) requested`);
    const mov: any = Movies.find((movie) => movie.id === movieId);
    mov as Movie;
    let array: Movie[] = [];
    array.push(mov);
    return mov;
  }
}

//(Movies.find((movie) => movie.id === movieId))
