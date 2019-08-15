import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//For profile
import { AddArticlesComponent } from './profile/add-articles/add-articles.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { ShowArticleComponent } from './profile/show-article/show-article.component';
import { EditArticleComponent } from './profile/edit-article/edit-article.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FilterPipe } from './filter.pipe';
import { environment } from '../environments/environment';

import { UserauthComponent } from './userauth/userauth.component';
import { SigninComponent } from './userauth/signin/signin.component';



import { SignUpComponent } from './userauth/sign-up/sign-up.component';


import { ResetpasswordComponent } from './userauth/resetpassword/resetpassword.component';


import { ViewlawyersComponent } from './lawyers/viewlawyers/viewlawyers.component';
import { ViewclientComponent } from './client/viewclient/viewclient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerifyLawyerComponent } from './newLawyers/verify-lawyer/verify-lawyer.component';
import { ConfirmLawyerComponent } from './newLawyers/confirm-lawyer/confirm-lawyer.component';



@NgModule({
  declarations: [
    AppComponent,
    AddArticlesComponent,
    DashboardComponent,
    FilterPipe,
    ShowArticleComponent,
    EditArticleComponent,
    UserauthComponent,
    SigninComponent,
    SignUpComponent,
    ResetpasswordComponent,
    ViewlawyersComponent,
    ViewclientComponent,
    NavbarComponent,
    VerifyLawyerComponent,
    ConfirmLawyerComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
