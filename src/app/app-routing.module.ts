import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {HomeComponent} from './components/home/home.component';
import {FilmsListComponent} from './components/films-list/films-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
