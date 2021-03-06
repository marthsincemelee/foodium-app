import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-all-recipe-list',
  templateUrl: './all-recipe-list.component.html',
  styleUrls: ['./all-recipe-list.component.css']
})
export class AllRecipeListComponent implements OnInit {

  constructor(public recipeService: RecipeService) {
    this.recipeService.getAllRecipes();
  }

  ngOnInit(): void {
  }

}
