import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "../models/Recipe";

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Array<Recipe>, searchText: string, favourite: boolean): Array<Recipe> {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    if(favourite){
      console.log("Called pipe with favourite");
      return items.filter(it => {
        return it.favourite && it.name.toLocaleLowerCase().includes(searchText);
      });
    }

    console.log("Called pipe");
    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
