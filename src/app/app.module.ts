import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NzLayoutModule,
    NzTypographyModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
