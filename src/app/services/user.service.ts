import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {Recipe} from "../models/Recipe";
import {AuthService} from "./auth.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoading: boolean;
  dataLoaded: boolean;
  loginForm!: FormGroup;
  user: User;

  constructor(private client: HttpClient, private router: Router, private authService: AuthService, private message: NzMessageService) {
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
          this.message.success("Du wurdest erfolgreich eingeloggt!")
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

  public addRecipeToUser(recipe: Recipe){
    this.user.recipes.push(recipe);
    this.message.info("Rezept wurde lokal dem User hinzugefügt!");
    this.updateUser();
  }

  public removeRecipeFromUser(recipe: Recipe){
    if(!this.user.recipes.find(r => recipe.id == r.id)){
      return;
    }

    recipe.favourite = false;
    let index = this.user.recipes.indexOf(recipe);
    this.user.recipes.splice(index, 1);
    this.message.info("Rezept wurde lokal dem User entfernt!");
    this.updateUser();
  }

  public updateUser(){
    return this.client.put<User>(environment.dataUrl + '/users/' + this.user.id, this.user, {headers: {Authorization: "Bearer " + this.authService.jwt}})
      .subscribe({
        next: data => {
          this.user = data
          this.message.success("Der Benutzer wurde erfolgreich geupdatet!");
        },
        error: err => this.message.error("Es gab einen Fehler beim updaten des Benutzers! \n" + err),
        }
      );
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
    this.dataLoaded = false;
    this.client.get<User>(environment.dataUrl + '/users/' + userId, {headers: {Authorization: "Bearer " + this.authService.jwt}}).subscribe({
      next: data => {
        this.user = data
      },
      error: err => {
        console.log("Userdaten können nicht geladen werden");
        this.router.navigate(["login"]);
      }
    })
  }
}
