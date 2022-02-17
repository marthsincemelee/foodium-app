import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt: string = "";

  constructor(private cookieService: CookieService, private router: Router) { }

  isAuthenticated() {
    return this.isJWTTokenPresent() && this.isUserIDPresent();
  }

  public setUserID(id: string){
    this.cookieService.set("FOODIUM_USERID", id);
  }

  public getUserID(){
    return this.cookieService.get("FOODIUM_USERID");
  }

  public isUserIDPresent() {
    return this.cookieService.get("FOODIUM_USERID") != undefined && this.cookieService.get("FOODIUM_USERID") != "";
  }

  public setJWTTokenCookie(token: string){
    this.cookieService.set("FOODIUM_JWT", token);
    this.jwt = token;
  }

  public getJWTTokenCookie(){
    // @ts-ignore
    this.jwt = this.cookieService.get("FOODIUM_JWT");
  }

  public isJWTTokenPresent() {
    return this.cookieService.get("FOODIUM_JWT") != undefined && this.cookieService.get("FOODIUM_JWT") != "";
  }

  public logout() {
    this.removeJWTToken();
    this.removeUserID();
    this.router.navigate(["login"]);
  }


  public removeJWTToken() {
    this.cookieService.delete("FOODIUM_JWT");
  }

  public removeUserID() {
    this.cookieService.delete("FOODIUM_USERID");
  }

}
