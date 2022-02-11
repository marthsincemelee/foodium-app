import { Injectable } from '@angular/core';
import {Recipe} from "../models/Recipe";
import {Ingredient} from "../models/Ingredient";
import {UnitType} from "../models/UnitType";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  GetRecipeForWeek(): Array<Recipe> {
    return new Array<Recipe>(new Recipe("Reis mit Ei", "https://google.com",
      new Array<Ingredient>(
        new Ingredient("Ei",1,UnitType.piece, false),
        new Ingredient("Reis",5,UnitType.kg, false),
      ), false),
      new Recipe("Reis mit Ei", "https://google.com",
        new Array<Ingredient>(
          new Ingredient("Ei",1,UnitType.piece, false),
          new Ingredient("Reis",5,UnitType.kg, false),
        ), false),
      new Recipe("Reis mit Ei", "https://google.com",
        new Array<Ingredient>(
          new Ingredient("Ei",1,UnitType.piece, false),
          new Ingredient("Reis",5,UnitType.kg, false),
        ), false),
      new Recipe("Reis mit Ei", "https://google.com",
        new Array<Ingredient>(
          new Ingredient("Ei",1,UnitType.piece, false),
          new Ingredient("Reis",5,UnitType.kg, false),
        ), false),
      new Recipe("Reis mit Ei", "https://google.com",
        new Array<Ingredient>(
          new Ingredient("Ei",1,UnitType.piece, false),
          new Ingredient("Reis",5,UnitType.kg, false),
        ), false),
      new Recipe("Reis mit Ei", "https://google.com",
        new Array<Ingredient>(
          new Ingredient("Ei",1,UnitType.piece, false),
          new Ingredient("Reis",5,UnitType.kg, false),
        ), false),
      new Recipe("Reis mit Ei", "https://google.com",
        new Array<Ingredient>(
          new Ingredient("Ei",1,UnitType.piece, false),
          new Ingredient("Reis",5,UnitType.kg, false),
        ), false));
  }


  constructor() { }
}
