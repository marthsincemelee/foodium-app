import {Ingredient} from "./Ingredient";

export class Recipe {
  name: string;
  recipe_link:string;
  ingredients : Array<Ingredient>;
  favourite: boolean;


  constructor(name: string, recipe_link: string, ingredients: Array<Ingredient>, favourite: boolean) {
    this.name = name;
    this.recipe_link = recipe_link;
    this.ingredients = ingredients;
    this.favourite = favourite;
  }
}
