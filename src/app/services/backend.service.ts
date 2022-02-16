import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Recipe} from "../models/Recipe";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public jwt: string = "";

  constructor(private client: HttpClient) { }

  public getRecipes() {
    return this.client.get<Array<Recipe>>(environment.dataUrl + '/recipes',{headers: {Authorization: "Bearer " + this.jwt}});
  }

  public requestAuthentication(username: string, password: string){
    const data = {
      identifier: username,
      password: password
    }
    return this.client.post<any>(environment.dataUrl + '/auth/local', data, {observe: "response"});
  }

  public updateUserRecipeListWithCurrentUser(user: User){
    return this.client.put<User>(environment.dataUrl + '/users/' + user.id, user, {headers: {Authorization: "Bearer " + this.jwt}});
  }


  public addRecipe(recipe: Recipe) {
    return this.client.post<Recipe>(environment.dataUrl + "/recipes", recipe, {headers: {Authorization: "Bearer " + this.jwt}});
  }

}
