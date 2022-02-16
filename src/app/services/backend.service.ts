import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public jwt: string = "";

  constructor(private client: HttpClient) { }

  public getRecipes() {

  }

  public requestAuthentication(username, password){
    const data = {
      identifier: username,
      password: password
    }
    return this.http.post<any>(environment.dataUrl + '/auth/local', data, {observe: "response"});
  }

  public UpdateCurrentUser(user: User){

  }

  public addRecipe() {
    this.http.get()
  }

}
