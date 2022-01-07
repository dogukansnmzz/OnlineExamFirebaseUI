import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authenticationComponents/login/login.component';
import { RegisterComponent } from './components/authenticationComponents/register/register.component';
import { HomeComponent } from './components/environmentComponents/home/home.component';
import { NotFoundComponent } from './components/environmentComponents/not-found/not-found.component';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'
import { AdminPanelComponent } from './components/panelComponents/adminPanelComponents/admin-panel/admin-panel.component';
import { UserPanelComponent } from './components/panelComponents/userPanelComponents/user-panel/user-panel.component';
import { SelectPanelsComponent } from './components/panelComponents/select-panels/select-panels.component';
import { QuestionAddComponent } from './components/questionComponents/question-add/question-add.component';
import { QuestionListComponent } from './components/questionComponents/question-list/question-list.component';
import { ForwardedReplieListComponent } from './components/forwardedReplieComponents/forwarded-replie-list/forwarded-replie-list.component';
import { AdminGuard } from './guards/admin.guard';

const redirectToLogin = () => redirectUnauthorizedTo(["account/login"]);
const redirectToAdminPanel = () => redirectLoggedInTo(["admin/panel"])

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},

  {path:'account',...canActivate(redirectToAdminPanel),children:[
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent}
  ]},

  {path:'admin/panel',...canActivate(redirectToLogin),canActivate:[AdminGuard],children:[
    {path:'',component:AdminPanelComponent}
  ]},

  {path:'user/panel',...canActivate(redirectToLogin),children:[
    {path:'',component:UserPanelComponent}
  ]},

  {path:'panels/select',component:SelectPanelsComponent,...canActivate(redirectToLogin)},

  {path:'exam',...canActivate(redirectToLogin),children:[
    {path:'list',component:QuestionListComponent}
    //{path:'add',component:QuestionAddComponent}
  ]},

  {path:'forwarded-replie',...canActivate(redirectToLogin),canActivate:[AdminGuard],children:[
    {path:'list',component:ForwardedReplieListComponent}
  ]},

  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
