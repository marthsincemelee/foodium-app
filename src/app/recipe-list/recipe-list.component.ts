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

}
