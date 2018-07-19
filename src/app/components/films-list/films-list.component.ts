import { Component, OnInit } from '@angular/core';

// Services
import {FilmsService} from '../../services/films.service';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  catalog;
  plusOne = this.favor.addFavor();
  selected;
  sortList = [
    {value: '0', viewValue: 'По алфавиту: A-Z'},
    {value: '1', viewValue: 'По алфавиту: Z-A'}
  ];

  constructor( private films: FilmsService, private favor: FavoriteService ) { }

  ngOnInit() {
    this.catalog = this.films.films;
    console.log(this.catalog);
  }

  counterFavorite () {
    this.plusOne ++;
  }

  sortListFilm () {
    if (  this.selected !== '0' ) {
      this.selected = '1';
      this.newListAZ();
    } else {
      this.selected = '0';
      this.newListZA();
    }
  }

  newListAZ () {
    this.catalog.sort( ( prev, next ) => {
      console.log('000000');

      if ( prev.name < next.name ) {
        return 1;
      }

      if ( prev.name > next.name ) {
        return -1;
      }

    });
  }

  newListZA () {
    this.catalog.sort( ( prev, next ) => {
      console.log('111111');

      if ( prev.name > next.name ) {
        return 1;
      }

      if ( prev.name < next.name ) {
        return -1;
      }

    });
  }

}
