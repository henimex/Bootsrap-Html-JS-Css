import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './DataBindingExample/Components/product/product.component';
import { TableExampleComponent } from './DataBindingExample/Components/table-example/table-example.component';
import { DashboardComponent } from './MovieApp/Componnents/dashboard/dashboard.component';
import { MovieDetailComponent } from './MovieApp/Componnents/movie-detail/movie-detail.component';
import { MoviesComponent } from './MovieApp/Componnents/movies/movies.component';
import { TodoComponent } from './TodoApp/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/tables', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'dataBindingApp', component: ProductComponent },
  { path: 'tables', component: TableExampleComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'product', component: ProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
