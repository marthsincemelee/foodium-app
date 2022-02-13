import { Injectable } from '@angular/core';
import {Recipe} from "../models/Recipe";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserService} from "../user.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  favouriteRecipes : Array<Recipe>;
  allRecipes : Array<Recipe>;


  getAllRecipes() {
    this.client.get<Array<Recipe>>(environment.dataUrl + "/recipes", {headers: {Authorization: "Bearer " + this.userService.jwt }})
      .subscribe({
        next: (next) => this.allRecipes = next,
        error: (err) => console.log(err)
      })
  }

  generateWeeklyRecipes() {
    this.favouriteRecipes = new Array<Recipe>();
    let copyOfRecipes = new Array<Recipe>();
    copyOfRecipes = copyOfRecipes.concat(this.userService.user.recipes);

    for(let i = 0; i < 7; i++){
      let random = Math.floor(Math.random() * copyOfRecipes.length);

      if(copyOfRecipes.length == 0){
        copyOfRecipes = copyOfRecipes.concat(this.userService.user.recipes);
      }

      this.favouriteRecipes.push(copyOfRecipes[random]);
      copyOfRecipes.splice(random, 1);
    }
  }

  addFavouriteRecipeToUser(recipe: Recipe){
    console.log("Before", this.userService.user);
    this.client.post<Recipe>(
      environment.dataUrl + "/recipes",
      recipe,
      {headers: {Authorization: "Bearer " + this.userService.jwt }})
      .subscribe(
        {
          next: (next) => {
            this.userService.user.recipes.push(next);
            this.client.put<User>(
              environment.dataUrl + "/users/" + this.userService.user.id,
              this.userService.user,
              {headers: {Authorization: "Bearer " + this.userService.jwt }})
              .subscribe(
                {
                  next: (next) => this.userService.user = next,
                  error: (err) => console.log(err)
                }
              );
          },
          error: (err) => console.log(err)
        }
      );
  }

  addRecipeToDatabase(recipe : Recipe){
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
    this.favouriteRecipes = new Array<Recipe>();
    this.allRecipes = new Array<Recipe>();
  }
}
