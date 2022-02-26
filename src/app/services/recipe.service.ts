import { Injectable } from '@angular/core';
import {Recipe} from "../models/Recipe";
import {UserService} from "./user.service";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {AuthService} from "./auth.service";

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

    this.getRecipes().subscribe(
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
    this.favouriteRecipes = shuffled.slice(0, 7);
    this.dataLoaded = true;
  }

  addFavouriteRecipeToUser(recipe: Recipe){

    this.addRecipeToDatabase(recipe).subscribe({
      next: data => {
        this.userService.addRecipeToUser(data);

        this.addRecipeToUser(this.userService.user).subscribe(
          {
          next: data => {
            this.userService.user = data;
          }
        })
      }
    })
  }

  addRecipe(recipe : Recipe){
    this.addRecipeToDatabase(recipe).subscribe({
      next: data => {
        console.log("Added Recipe to database", data);
      }
    })
  }

  public getRecipes() {
    return this.client.get<Array<Recipe>>(environment.dataUrl + '/recipes',{headers: {Authorization: "Bearer " + this.authService.jwt}});
  }

  public addRecipeToUser(user: User){
    return this.client.put<User>(environment.dataUrl + '/users/' + user.id, user, {headers: {Authorization: "Bearer " + this.authService.jwt}});
  }

  public addRecipeToDatabase(recipe: Recipe) {
    return this.client.post<Recipe>(environment.dataUrl + "/recipes", recipe, {headers: {Authorization: "Bearer " + this.authService.jwt}});
  }

  constructor(private client: HttpClient, private userService : UserService, private authService: AuthService) {
    this.dataLoaded = false;
    this.favouriteRecipes = new Array<Recipe>();
    this.allRecipes = new Array<Recipe>();
  }
}
