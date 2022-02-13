import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/Recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService: RecipeService) {
    this.regenerateWeeklyList();
    this.recipeService.getAllRecipes();
  }

  regenerateWeeklyList() {
    this.recipeService.generateWeeklyRecipes();
  }

  ngOnInit(): void {
  }

}
