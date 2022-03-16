import {Ingredient} from "./Ingredient";

export class Recipe {
  name: string;
  link:string;
  ingredients : Array<Ingredient>;

  id: number | undefined;
  favourite : boolean | undefined;


  constructor(name: string, link: string, ingredients: Array<Ingredient>) {
    this.name = name;
    this.link = link;
    this.ingredients = ingredients;
  }
}
