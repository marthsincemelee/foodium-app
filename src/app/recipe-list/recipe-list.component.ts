import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/Recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: Array<Recipe>

  constructor(public recipeService: RecipeService) {
    this.recipeList = new Array<Recipe>()
  }

  ngOnInit(): void {
  }

}
