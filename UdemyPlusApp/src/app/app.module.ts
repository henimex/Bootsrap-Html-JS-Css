import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/todo/todo.component';

import { MoviesComponent } from './Components/MovieComps/movies/movies.component';
import { MovieComponent } from './Components/MovieComps/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MovieComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
