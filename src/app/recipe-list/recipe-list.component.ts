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
    let queryParams = "";

    currentRecipes.forEach( recipe => {
      queryParams+= recipe.id + "-"
    });

    queryParams = queryParams.slice(0, queryParams.length-1);
    console.log("Query", queryParams);

    this.router.navigate(['/import/'],
      { queryParams: {
        recipeIds: queryParams
      }}
    );
  }

  ngOnInit(): void {
  }

}
