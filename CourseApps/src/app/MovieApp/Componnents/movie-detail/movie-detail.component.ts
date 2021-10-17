import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() inputSelectedMovie: Movie

  constructor() { }

  ngOnInit(): void {
  }

}
