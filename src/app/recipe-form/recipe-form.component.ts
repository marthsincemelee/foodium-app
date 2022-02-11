import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  currentStep: number;
  allIngredients: any;

  constructor() {
    this.currentStep = 0;
    this.allIngredients = [];
  }

  ngOnInit(): void {
  }

  addIngredient(ingredient: any): void {

  }

}
