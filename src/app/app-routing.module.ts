import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {FavouriteListComponent} from "./favourite-list/favourite-list.component";
import {AllRecipeListComponent} from "./all-recipe-list/all-recipe-list.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'new-recipe', component: RecipeFormComponent, canActivate: [AuthGuardService]},
  { path: 'generate-week', component: RecipeListComponent, canActivate: [AuthGuardService]},
  { path: 'favourites', component: FavouriteListComponent, canActivate: [AuthGuardService]},
  { path: "all", component: AllRecipeListComponent, canActivate: [AuthGuardService]},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
