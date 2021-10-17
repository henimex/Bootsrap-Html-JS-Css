import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './TodoApp/todo/todo.component';
import { MovieComponent } from './MovieApp/Componnents/movie/movie.component';
import { MoviesComponent } from './MovieApp/Componnents/movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './MovieApp/Componnents/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
