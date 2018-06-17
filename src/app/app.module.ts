import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { JogosPage } from '../pages/jogos/jogos';
import { ApostasPage } from '../pages/apostas/apostas';
import { ClassificacaoPage } from '../pages/classificacao/classificacao';
import { ProfilePage } from '../pages/profile/profile';


export const environment = {
  firebase: {
    apiKey: "AIzaSyC97FFnf7C4gE7qXEQ-cKbhrUtfnU5K0lU",
    authDomain: "bolaorussia-e985d.firebaseapp.com",
    databaseURL: "https://bolaorussia-e985d.firebaseio.com",
    projectId: "bolaorussia-e985d",
    storageBucket: "bolaorussia-e985d.appspot.com",
    messagingSenderId: "871984322334"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    JogosPage,
    ApostasPage,
    ClassificacaoPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    JogosPage,
    ApostasPage,
    ClassificacaoPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
