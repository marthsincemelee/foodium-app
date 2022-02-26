import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../models/Recipe";
import {Ingredient} from "../models/Ingredient";
import {UnitType} from "../models/UnitType";
import {RecipeService} from "../services/recipe.service";
import 'animate.css';

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
  isFrontDisplayed: boolean;

  ingredientsTitle: string = "Zutaten";

  constructor(public recipeService: RecipeService) {
    this.isFrontDisplayed = true;
  }

  ngOnInit(): void {
  }

  flipCard(): void {
    this.isFrontDisplayed = !this.isFrontDisplayed;
  }

}
