import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './app-routing.module';
// Material
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';


// Components
import { AppComponent } from './app.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmItemComponent } from './components/films-list/film-item/film-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmItemComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
