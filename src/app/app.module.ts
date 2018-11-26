import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {StorageProvider} from '../providers/storage/storage';
import {HttpClientModule} from "@angular/common/http";
import {SQLite} from "@ionic-native/sqlite";
import {WelcomePage} from "../pages/welcome/welcome";
import {RegistrationPage} from "../pages/registration/registration";
import {EmailComposer} from "@ionic-native/email-composer";
import {Camera} from "@ionic-native/camera";
import {EmailPage} from "../pages/email/email";
import {HistoryPage} from "../pages/history/history";
import {File} from "@ionic-native/file";
import { Base64 } from '@ionic-native/base64';
import {FilePath} from "@ionic-native/file-path";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    RegistrationPage,
    EmailPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    RegistrationPage,
    EmailPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider, SQLite, EmailComposer, Camera, File, Base64, FilePath
  ]
})
export class AppModule {
}
