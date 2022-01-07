import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MaterialModule } from './modules/material/material.module';
import { MessageModule } from './modules/message/message.module';
import { NavigationComponent } from './components/environmentComponents/navigation/navigation.component';
import { NotFoundComponent } from './components/environmentComponents/not-found/not-found.component';
import { HomeComponent } from './components/environmentComponents/home/home.component';
import { RegisterComponent } from './components/authenticationComponents/register/register.component';
import { LoginComponent } from './components/authenticationComponents/login/login.component';
import { AdminPanelComponent } from './components/panelComponents/adminPanelComponents/admin-panel/admin-panel.component';
import { UserPanelComponent } from './components/panelComponents/userPanelComponents/user-panel/user-panel.component';
import { AdminNavigationComponent } from './components/panelComponents/adminPanelComponents/admin-navigation/admin-navigation.component';
import { SelectPanelsComponent } from './components/panelComponents/select-panels/select-panels.component';
import { QuestionListComponent } from './components/questionComponents/question-list/question-list.component';
import { QuestionAddComponent } from './components/questionComponents/question-add/question-add.component';
import { ForwardedReplieListComponent } from './components/forwardedReplieComponents/forwarded-replie-list/forwarded-replie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminPanelComponent,
    UserPanelComponent,
    AdminNavigationComponent,
    SelectPanelsComponent,
    QuestionListComponent,
    QuestionAddComponent,
    ForwardedReplieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    MaterialModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
