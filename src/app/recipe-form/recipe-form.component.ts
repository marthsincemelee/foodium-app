import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../models/Ingredient";
import {NzMessageService} from "ng-zorro-antd/message";
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../models/Recipe";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  recipeForm!: FormGroup;
  ingredientForm!: FormGroup;
  currentStep: number;
  allIngredients: any;

  constructor(private fb: FormBuilder, private message: NzMessageService, private recipeService:RecipeService) {
    this.currentStep = 0;
    this.allIngredients = [];
  }

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      recipeName: [null, Validators.required],
      ingredients: [null]

    })

    this.ingredientForm = this.fb.group({
      ingredientName: [null, Validators.required],
      ingredientAmount: [null, Validators.required],
      ingredientUnit: ['g', Validators.required]
    })
  }

  addIngredient(): void {
    if (this.ingredientForm.valid) {
      this.allIngredients.push(
        new Ingredient(
          this.ingredientForm.value.ingredientName,
          this.ingredientForm.value.ingredientAmount,
          this.ingredientForm.value.ingredientUnit,
          false));
      this.ingredientForm.reset();
    } else {
      this.message.error('Beim hinzufügen deiner Zutat ist ein Problem aufgetreten.');
    }

  }

  submitRecipe(): void {
    this.recipeForm.value.ingredients = this.allIngredients;
    if (this.recipeForm.valid) {
      this.recipeService.addRecipeToDatabase(new Recipe(this.recipeForm.value.recipeName, "", this.recipeForm.value.ingredients, false));
    } else {
      this.message.error('Das hat leider nicht funktioniert.')
    }
  }

}
