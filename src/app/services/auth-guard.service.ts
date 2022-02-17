import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router:Router, private userService: UserService) { }

  canActivate(){
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    console.log("Found Cookies")
    this.authService.getJWTTokenCookie();
    let userId = this.authService.getUserID();
    this.userService.retrieveUser(userId);
    return true;
  }
}
