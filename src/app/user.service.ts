import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataLoaded: boolean;
  loginForm!: FormGroup;
  jwt: string;


  constructor(private http: HttpClient, private router: Router) {
    this.dataLoaded = false;
    this.jwt = '';
  }

  requestLogin(username: string, password: string): void {
    const data = {
      identifier: username,
      password: password
    }
    this.http.post<any>(environment.dataUrl + '/auth/local', data, {observe: "response"}).subscribe(
      (response) => {
        console.log(response.body);
        this.router.navigate(['/home']);
        this.jwt = response.body.jwt;

      },
      (error) => {
        console.log(error);
      }
    )
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
