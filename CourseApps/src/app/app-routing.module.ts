import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MovieApp/Componnents/dashboard/dashboard.component';
import { MovieDetailComponent } from './MovieApp/Componnents/movie-detail/movie-detail.component';
import { MoviesComponent } from './MovieApp/Componnents/movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
