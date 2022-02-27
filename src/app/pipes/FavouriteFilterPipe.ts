import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "../models/Recipe";

@Pipe({ name: 'favouriteFilter' })
export class FavouriteFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param favourite search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Array<Recipe>, favourite: boolean): Array<Recipe> {
    if (!items) {
      return [];
    }

    if(!favourite){
      return items;
    }

    return items.filter(it => {
      return it.favourite
    });
  }
}
