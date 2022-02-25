import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {de_DE} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import de from '@angular/common/locales/de';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {RecipeCardComponent} from './recipe-card/recipe-card.component';
import {NzAnchorModule} from "ng-zorro-antd/anchor";
import {NzListModule} from "ng-zorro-antd/list";
import {AppBarComponent} from './app-bar/app-bar.component';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {HomeComponent} from './home/home.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { AllRecipeListComponent } from './all-recipe-list/all-recipe-list.component';
import {NzCollapseModule} from "ng-zorro-antd/collapse";


registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecipeCardComponent,
    AppBarComponent,
    HomeComponent,
    RecipeFormComponent,
    RecipeCardComponent,
    RecipeListComponent,
    FavouriteListComponent,
    AllRecipeListComponent
  ],
    imports: [
        BrowserModule,
        NzEmptyModule,
        FormsModule,
        NzLayoutModule,
        NzTypographyModule,
        NzButtonModule,
        NzPageHeaderModule,
        NzMessageModule,
        NzDividerModule,
        NzGridModule,
        NzSpinModule,
        NzSelectModule,
        NzStepsModule,
        NzIconModule,
        NzInputModule,
        NzFormModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        NzCardModule,
        NzAnchorModule,
        NzListModule,
        ReactiveFormsModule,
        NzSwitchModule,
        NzCollapseModule
    ],
  providers: [{provide: NZ_I18N, useValue: de_DE}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
