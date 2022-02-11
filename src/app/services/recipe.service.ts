import { Injectable } from '@angular/core';
import {Recipe} from "../models/Recipe";
import {Ingredient} from "../models/Ingredient";
import {UnitType} from "../models/UnitType";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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

  AddRecipeToDatabase(recipe : Recipe){
    this.client.post(environment.baseUrl + "/recipes", {recipe: recipe})
      .subscribe(
        {
          next: (next) => console.log(next),
          error: (err) => console.log(err)
        }
      );
  }


  constructor(private client:HttpClient) { }
}
