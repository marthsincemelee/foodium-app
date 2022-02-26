import {Ingredient} from "./Ingredient";

export class Recipe {
  name: string;
  recipe_link:string;
  ingredients : Array<Ingredient>;

  id: number | undefined;
  favourite : boolean | undefined;


  constructor(name: string, recipe_link: string, ingredients: Array<Ingredient>) {
    this.name = name;
    this.recipe_link = recipe_link;
    this.ingredients = ingredients;
  }
}
