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
      let recipeIds :string = params["recipeIds"];
      console.log(recipeIds)
      recipeIds.split("-").forEach( id => this.ingredientIds.push(Number.parseInt(id)));
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

  getEncodedURL() : string {
    return encodeURI("https://api.getbring.com/rest/bringrecipes/deeplink?url=" + this.currentURL + "&source=web&baseQuantity=4&requestedQuantity=4")
  }

  ngOnInit(): void {

  }
}
