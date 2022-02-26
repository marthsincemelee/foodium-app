import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/Recipe";

@Component({
  selector: 'app-all-recipe-list',
  templateUrl: './all-recipe-list.component.html',
  styleUrls: ['./all-recipe-list.component.css']
})
export class AllRecipeListComponent implements OnInit {
  searchText: string = "";
  isFavouriteChecked: boolean;
  recipeList : Array<Recipe>;

  constructor(public recipeService: RecipeService) {
    this.recipeList = new Array<Recipe>()
    this.recipeService.getAllRecipes();
    this.isFavouriteChecked = false;
  }

  ngOnInit(): void {
  }

  clickSwitch() {
    if(this.recipeService.dataLoaded){
      if(this.isFavouriteChecked){
        this.recipeList = new Array<Recipe>();
        this.recipeList = this.recipeService.allRecipes;
      } else {
        this.recipeList = new Array<Recipe>();
        this.recipeList = this.recipeService.favouriteRecipes;
      }
      this.isFavouriteChecked = !this.isFavouriteChecked;
    }
  }
}
