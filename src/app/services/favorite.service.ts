import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  favor = 0;

  addFavor () {
    return this.favor;
  }
}
