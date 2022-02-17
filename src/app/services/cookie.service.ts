import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  public isJWTTokenPresent() {
    return sessionStorage.getItem("FOODIUM_JWT") != undefined;
  }

  public isUserPresent() {
    return sessionStorage.getItem("FOODIUM_USER") != undefined;
  }

  public isLoggedIn() {
    return this.isUserPresent() && this.isJWTTokenPresent();
  }



}
