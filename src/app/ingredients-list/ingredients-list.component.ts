import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../models/Ingredient";
import {RecipeService} from "../services/recipe.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

  ingredientList: Array<Ingredient> = new Array<Ingredient>();
  ingredientIds: Array<Number> = new Array<Number>();
  currentURL : string = "";

  constructor(public recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
    this.currentURL = window.location.href;
    console.log(window.location.href)
    console.log("https://api.getbring.com/rest/bringrecipes/deeplink?url=" + this.currentURL + "&source=web&baseQuantity=4&requestedQuantity=4")
    this.route.queryParams.subscribe(params => {
      this.ingredientIds.push(params["id1"]);
      this.ingredientIds.push(params["id2"]);
      this.ingredientIds.push(params["id3"]);
      this.ingredientIds.push(params["id4"]);
      this.ingredientIds.push(params["id5"]);
      this.ingredientIds.push(params["id6"]);
      this.ingredientIds.push(params["id7"]);
    });

    console.log(this.ingredientIds)

    this.recipeService.getAllRecipesPromise().subscribe(
      {
        next: next => {
          this.recipeService.allRecipes = next;
          console.log(this.recipeService.allRecipes)
          this.recipeService.allRecipes
            .filter(recipe => this.ingredientIds.find(s => s == recipe.id))
            .forEach(
              recipe => {
                recipe.ingredients.forEach(
                  ingredient => {
                    this.ingredientList.push(ingredient);
                  }
                )
              }
            )
          this.recipeService.dataLoaded = true;
        },
        error: console.log
      }
    );

  }

  ngOnInit(): void {

  }
}
