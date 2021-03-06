import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {Recipe} from "../models/Recipe";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoading: boolean;
  dataLoaded: boolean;
  loginForm!: FormGroup;
  user: User;
  
  constructor(private client: HttpClient, private router: Router, private authService: AuthService) {
    this.dataLoaded = false;
    this.isLoading = false;
    this.user = new User(0, "", "", "", false,false, new Array<Recipe>())
  }

  requestLogin(username: string, password: string): void {
    this.isLoading = true;
    this.requestAuthentication(username, password).subscribe(
      {
        next: (data: any) => {
          this.router.navigate(['/home']);
          this.authService.setJWTTokenCookie(data.body.jwt);
          this.authService.setUserID(data.body.user.id);
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

  public requestAuthentication(username: string, password: string){
    const data = {
      identifier: username,
      password: password
    }
    return this.client.post<any>(environment.dataUrl + '/auth/local', data, {observe: "response"});
  }

  public logout(){
    this.authService.removeJWTToken();
  }

  retrieveUser(userId: string) {
    this.client.get<User>(environment.dataUrl + '/users/' + userId, {headers: {Authorization: "Bearer " + this.authService.jwt}}).subscribe({
      next: data => this.user = data,
      error: err => {
        console.log("Userdaten k??nnen nicht geladen werden");
        this.router.navigate(["login"]);
      }
    })
  }
}
