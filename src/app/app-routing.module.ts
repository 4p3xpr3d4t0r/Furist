import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddArticlesComponent } from './profile/add-articles/add-articles.component';
import { EditArticleComponent } from './profile/edit-article/edit-article.component';
import { ShowArticleComponent } from './profile/show-article/show-article.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';

import { SigninComponent } from './userauth/signin/signin.component';


import { AuthGuard } from './userauth/signin/auth.guard';
import { Profileguard } from './userauth/signin/profile.guard';

import { SignUpComponent } from './userauth/sign-up/sign-up.component';

import { ResetpasswordComponent } from './userauth/resetpassword/resetpassword.component';
import { ViewlawyersComponent } from './lawyers/viewlawyers/viewlawyers.component';
import { ViewclientComponent } from './client/viewclient/viewclient.component';
import { VerifyLawyerComponent } from './newLawyers/verify-lawyer/verify-lawyer.component';
import { ConfirmLawyerComponent } from './newLawyers/confirm-lawyer/confirm-lawyer.component';


const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'add', component: AddArticlesComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditArticleComponent, canActivate: [AuthGuard] },
  { path: 'article/:id', component: ShowArticleComponent, canActivate: [AuthGuard] },
  { path: 'viewprofile', component: DashboardComponent, canActivate: [AuthGuard] },


    { path: 'sign-up', component: SignUpComponent, canActivate: [Profileguard]},


    { path: 'resetpassword', component: ResetpasswordComponent},

    { path: 'viewlawyers', component: ViewlawyersComponent, canActivate: [AuthGuard] },
    { path: 'viewclients', component: ViewclientComponent, canActivate: [AuthGuard] },
    { path: 'verifyLawyers', component: VerifyLawyerComponent, canActivate: [AuthGuard] },
    
    { path: 'cofirmLawyers', component: ConfirmLawyerComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard,Profileguard]

})
export class AppRoutingModule { }
