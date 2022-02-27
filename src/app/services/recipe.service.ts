import { Injectable } from '@angular/core';
import {Recipe} from "../models/Recipe";
import {UserService} from "./user.service";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  weeklyRecipes: Array<Recipe>
  allRecipes : Array<Recipe>;
  dataLoaded: boolean;


  getAllRecipes() {
    this.dataLoaded = false;
    this.allRecipes = new Array<Recipe>();
    this.getRecipes().subscribe(
      {
        next: data => {
          this.allRecipes = data as Array<Recipe>;
          this.mapRecipesOnFavouriteRecipes();
          console.log(this.allRecipes)
          this.dataLoaded = true;
        }
      }
    )
  }

  mapRecipesOnFavouriteRecipes() {
    this.allRecipes.forEach(recipe => {
      if(this.userService.user.recipes.find(r => r.id == recipe.id)){
        recipe.favourite = true;
      }
    })
  }

  generateWeeklyRecipes() {
    this.dataLoaded = false;
    this.weeklyRecipes = new Array<Recipe>();
    let copyOfRecipes = new Array<Recipe>();
    copyOfRecipes = copyOfRecipes.concat(this.userService.user.recipes);
    let shuffled = copyOfRecipes.sort(() => 0.5 - Math.random());
    this.weeklyRecipes = shuffled.slice(0, 7);
    this.dataLoaded = true;
  }

  addFavouriteRecipeToUser(recipe: Recipe){
    this.addRecipeToDatabase(recipe).subscribe({
      next: data => {
        this.addRecipeToUser(data);
      }
    })
  }

  public createRecipe(recipe : Recipe){
    this.addRecipeToDatabase(recipe).subscribe({
      next: data => {
        console.log("Added Recipe to database", data);
      }
    })
  }

  public addRecipeToUser(recipe: Recipe){
    this.userService.addRecipeToUser(recipe);
    this.mapRecipesOnFavouriteRecipes();
  }

  public removeRecipeFromUser(recipe: Recipe){
    this.userService.removeRecipeFromUser(recipe);
    this.mapRecipesOnFavouriteRecipes();
  }

  public getRecipes() {
    return this.client.get<Array<Recipe>>(environment.dataUrl + '/recipes',{headers: {Authorization: "Bearer " + this.authService.jwt}});
  }

  public addRecipeToDatabase(recipe: Recipe) {
    return this.client.post<Recipe>(environment.dataUrl + "/recipes", recipe, {headers: {Authorization: "Bearer " + this.authService.jwt}});
  }

  constructor(private client: HttpClient, private userService : UserService, private authService: AuthService) {
    this.dataLoaded = false;
    this.weeklyRecipes = new Array<Recipe>();
    this.allRecipes = new Array<Recipe>();
  }
}
