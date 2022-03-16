import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../models/Recipe";
import {Ingredient} from "../models/Ingredient";
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  //ToDo: Ingredienttype mit Tags farbig markieren
  //ToDo: Ingredients nach Type sortieren
  @Input() recipe: Recipe = new Recipe("No recipe found", "https://www.eggs.ca", new Array<Ingredient>())
  @Input() isStarEnabled: boolean = false;

  ingredientsTitle: string = "Zutaten";

  constructor(public recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  changeFavouriteStateForRecipe() {
    if(this.recipe.favourite){
      this.recipeService.removeRecipeFromUser(this.recipe);
      this.recipe.favourite = false;
    } else {
      this.recipeService.addRecipeToUser(this.recipe);
      this.recipe.favourite = true;
    }
  }
}
