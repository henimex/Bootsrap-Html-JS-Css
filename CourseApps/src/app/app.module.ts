import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './TodoApp/todo/todo.component';
import { MovieComponent } from './MovieApp/Componnents/movie/movie.component';
import { MoviesComponent } from './MovieApp/Componnents/movies/movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailComponent } from './MovieApp/Componnents/movie-detail/movie-detail.component';
import { LoggingComponent } from './MovieApp/logging/logging.component';
import { DashboardComponent } from './MovieApp/Componnents/dashboard/dashboard.component';
import { NavbarComponent } from './MovieApp/Componnents/navbar/navbar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductComponent } from './DataBindingExample/Components/product/product.component';
import { SummaryPipe } from './DataBindingExample/Pipes/summary.pipe';
import { DirectivesComponent } from './DataBindingExample/Components/directives/directives.component';
import { InputEmailDirective } from './DataBindingExample/Components/CustomDirective/input-email.directive';
import { TableExampleComponent } from './DataBindingExample/Components/table-example/table-example.component';
import { FormExampleComponent } from './DataBindingExample/Components/form-example/form-example.component';
import { AngExamComponent } from './DataBindingExample/Components/ang-exam/ang-exam.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailComponent,
    LoggingComponent,
    DashboardComponent,
    NavbarComponent,
    ProductComponent,
    SummaryPipe,
    DirectivesComponent,
    InputEmailDirective,
    TableExampleComponent,
    FormExampleComponent,
    AngExamComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
