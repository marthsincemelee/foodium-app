import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Router} from "@angular/router";
import {Recipe} from "../models/Recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService: RecipeService, private router: Router) {
    this.regenerateWeeklyList();
  }

  regenerateWeeklyList() {
    this.recipeService.generateWeeklyRecipes();
  }

  forwardToIngredientList() {
    let currentRecipes = this.recipeService.currentWeeklyRecipes;
    this.router.navigate(['/import/'],
      { queryParams: {
        id1: currentRecipes[0].id,
        id2: currentRecipes[1].id,
        id3: currentRecipes[2].id,
        id4: currentRecipes[3].id,
        id5: currentRecipes[4].id,
        id6: currentRecipes[5].id,
        id7: currentRecipes[6].id
      }}
    );
  }

  ngOnInit(): void {
  }

}
