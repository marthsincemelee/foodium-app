import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {Recipe} from "../models/Recipe";
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoading: boolean;
  dataLoaded: boolean;
  loginForm!: FormGroup;
  user: User;


  constructor(private backendService: BackendService, private router: Router) {
    this.dataLoaded = false;
    this.isLoading = false;
    this.user = new User(0, "", "", "", false,false, new Array<Recipe>())
  }

  requestLogin(username: string, password: string): void {
    this.isLoading = true;
    this.backendService.requestAuthentication(username, password).subscribe(
      {
        next: (data: any) => {
          this.router.navigate(['/home']);
          this.backendService.jwt = data.body.jwt;
          this.user = data.body.user;
        }
      }
    )

    this.isLoading = false;
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.requestLogin(this.loginForm.value.username, this.loginForm.value.password);
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  addRecipeToUser(recipe: Recipe){
    this.user.recipes.push(recipe);
  }

}
