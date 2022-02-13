import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "./models/user";
import {Recipe} from "./models/Recipe";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoading: boolean;
  dataLoaded: boolean;
  loginForm!: FormGroup;
  jwt: string;
  user: User;


  constructor(private http: HttpClient, private router: Router) {
    this.dataLoaded = false;
    this.isLoading = false;
    this.jwt = '';
    this.user = new User(0, "", "", "", false,false, new Array<Recipe>())
  }

  requestLogin(username: string, password: string): void {
    this.isLoading = true;
    const data = {
      identifier: username,
      password: password
    }
    this.http.post<any>(environment.dataUrl + '/auth/local', data, {observe: "response"}).subscribe(
      (response) => {
        this.router.navigate(['/home']);
        this.jwt = response.body.jwt;
        this.user = response.body.user;
      },
      (error) => {
        console.log(error);
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

}
