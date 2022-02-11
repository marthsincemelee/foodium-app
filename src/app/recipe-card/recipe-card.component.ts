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

  constructor() {
    this.recipe = new Recipe("Reis mit Ei", "https://google.com",
      new Array<Ingredient>(
        new Ingredient("Ei",1,UnitType.piece, false),
        new Ingredient("Reis",5,UnitType.kg, false),
      ), false);
  }

  GetUnitTypeAsString(type: UnitType){
    return UnitType[type];
  }

  ngOnInit(): void {
  }

}
