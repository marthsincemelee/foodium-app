import { Injectable } from '@angular/core';
import {Recipe} from "../models/Recipe";
import {Ingredient} from "../models/Ingredient";
import {UnitType} from "../models/UnitType";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes : Array<Recipe>

  getAllRecipes() {
    this.client.get<Array<Recipe>>(environment.dataUrl + "/recipes", {headers: {Authorization: "Bearer " + this.userService.jwt }})
      .subscribe({
        next: (next) => this.recipes = next,
        error: (err) => console.log(err)
      })
  }

  getFavouriteRecipes() {

  }

  addRecipeToDatabase(recipe : Recipe){
    console.log("Bearer " + this.userService.jwt);
    console.log(recipe)
    this.client.post(
      environment.dataUrl + "/recipes",
      recipe,
      {headers: {Authorization: "Bearer " + this.userService.jwt }})
      .subscribe(
        {
          next: (next) => console.log(next),
          error: (err) => console.log(err)
        }
      );
  }


  constructor(private client:HttpClient, private userService: UserService) {
    this.recipes = new Array<Recipe>();
  }
}
