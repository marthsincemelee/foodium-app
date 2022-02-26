import {Recipe} from "./interfaces/Recipe";

export class User {
  id : number
  username: string
  email : string
  provider: string
  confirmed: boolean
  blocked: boolean
  recipes : Array<Recipe>


  constructor(id: number, username: string, email: string, provider: string, confirmed: boolean, blocked: boolean, recipes: Array<Recipe>) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.provider = provider;
    this.confirmed = confirmed;
    this.blocked = blocked;
    this.recipes = recipes;
  }
}
