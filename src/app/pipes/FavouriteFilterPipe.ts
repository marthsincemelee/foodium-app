import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "../models/Recipe";

@Pipe({ name: 'favouriteFilter' })
export class FavouriteFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the boolean favourite
   *
   * @param items list of elements to search in
   * @returns list of elements filtered favourite property or []
   */
  transform(items: Array<Recipe>): Array<Recipe> {
    if (!items) {
      return [];
    }

    return items.filter(it => {
      return it.favourite;
    });
  }
}
