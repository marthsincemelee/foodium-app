import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../models/Recipe";
import {Ingredient} from "../models/Ingredient";
import {UnitType} from "../models/UnitType";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  //ToDo: Ingredienttype mit Tags farbig markieren
  //ToDo: Ingredients nach Type sortieren
  @Input() recipe: Recipe;
  @Input() isStarEnabled: boolean;

  constructor() {
    this.recipe = new Recipe("No recipe found", "https://www.eggs.ca", new Array<Ingredient>())
    this.isStarEnabled = false;
  }

  GetUnitTypeAsString(type: UnitType){
    return UnitType[type];
  }

  ngOnInit(): void {
  }

}
