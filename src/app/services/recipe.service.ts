import { Injectable } from '@angular/core';
import {Recipe} from "../models/Recipe";
import {UserService} from "./user.service";
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  favouriteRecipes : Array<Recipe>;
  allRecipes : Array<Recipe>;
  dataLoaded: boolean;


  getAllRecipes() {
    this.dataLoaded = false;
    this.allRecipes = [];

    this.backendService.getRecipes().subscribe(
      {
        next: data => {
          this.allRecipes = data;
          this.dataLoaded = true;
        }
      }
    )
  }

  generateWeeklyRecipes() {
    this.favouriteRecipes = new Array<Recipe>();
    let copyOfRecipes = new Array<Recipe>();
    copyOfRecipes = copyOfRecipes.concat(this.userService.user.recipes);
    let shuffled = copyOfRecipes.sort(() => 0.5 - Math.random());
    this.favouriteRecipes = shuffled.slice(0, 9);
    this.dataLoaded = true;
  }

  addFavouriteRecipeToUser(recipe: Recipe){

    this.backendService.addRecipe(recipe).subscribe({
      next: data => {
        this.userService.addRecipeToUser(data);

        this.backendService.addRecipeToUser(this.userService.user).subscribe(
          {
          next: data => {
            console.log("Updated User", data);
            this.userService.user = data;
          }
        })
      }
    })
  }

  addRecipe(recipe : Recipe){

    this.backendService.addRecipe(recipe).subscribe({
      next: data => {
        console.log("Added Recipe to database", data);
      }
    })
  }

  constructor(private backendService: BackendService, private userService : UserService) {
    this.dataLoaded = false;
    this.favouriteRecipes = new Array<Recipe>();
    this.allRecipes = new Array<Recipe>();
  }
}
