import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/Recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  weeklyRecipes: Array<Recipe>;

  constructor(public recipeService: RecipeService) {
    this.weeklyRecipes = new Array<Recipe>();
    this.generateWeeklyRecipes();
  }

  generateWeeklyRecipes() {
    this.recipeService.dataLoaded = false;
    this.weeklyRecipes = new Array<Recipe>();
    let copyOfRecipes = this.recipeService.allRecipes.filter(recipe => recipe.favourite);
    let shuffled = copyOfRecipes.sort(() => 0.5 - Math.random());
    this.weeklyRecipes = shuffled.slice(0, 7);

    this.recipeService.dataLoaded = true;
  }

  ngOnInit(): void {
  }

  rerollFromFavourite(recipeToReroll: Recipe) {
    let index = this.weeklyRecipes.indexOf(recipeToReroll);
    this.weeklyRecipes.splice(index, 1);

    let replacementRecipe: Recipe;

    replacementRecipe = this.recipeService.allRecipes
      .filter(recipe => recipe.favourite)
      .sort(() => 0.5 - Math.random())
      .slice(0, 1)[0];

    if(this.weeklyRecipes.includes(replacementRecipe)){
      while(this.weeklyRecipes.includes(replacementRecipe)){
        replacementRecipe = this.recipeService.allRecipes
          .filter(recipe => recipe != recipeToReroll)
          .filter(recipe => !this.weeklyRecipes.includes(recipe))
          .filter(recipe => recipe.favourite)
          .sort(() => 0.5 - Math.random())
          .slice(0, 1)[0];
      }
    }
    // @ts-ignore
    this.weeklyRecipes.splice(index, 0, replacementRecipe);
  }

  rerollFromAll(recipeToReroll: Recipe) {
    let index = this.weeklyRecipes.indexOf(recipeToReroll);
    this.weeklyRecipes.splice(index, 1);

    let replacementRecipe: Recipe;

    replacementRecipe = this.recipeService.allRecipes
      .filter(recipe => recipe != recipeToReroll)
      .filter(recipe => !this.weeklyRecipes.includes(recipe))
      .sort(() => 0.5 - Math.random())
      .slice(0, 1)[0];

    // @ts-ignore
    this.weeklyRecipes.splice(index, 0, replacementRecipe);
  }
}
