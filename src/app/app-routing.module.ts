import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {FavouriteListComponent} from "./favourite-list/favourite-list.component";
import {AllRecipeListComponent} from "./all-recipe-list/all-recipe-list.component";
import {IngredientsListComponent} from "./ingredients-list/ingredients-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-recipe', component: RecipeFormComponent},
  { path: 'generate-week', component: RecipeListComponent},
  { path: 'favourites', component: FavouriteListComponent},
  { path: "all", component: AllRecipeListComponent},
  { path: "import", component: IngredientsListComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
