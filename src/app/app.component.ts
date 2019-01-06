import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {StorageProvider} from "../providers/storage/storage";
import {WelcomePage} from "../pages/welcome/welcome";
import {EmailPage} from "../pages/email/email";
import {HistoryPage} from "../pages/history/history";
import {CalcPage} from "../pages/calc/calc";
import {AboutPage} from "../pages/about/about";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('content') nav: NavController;
  rootPage: any = HomePage;
  pages: Array<{ page: any, title: string, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private service: StorageProvider, private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // service.createdDb();
    });
    this.pages = [
      {page: WelcomePage, title: 'Notifications', icon: 'notifications'},
      {page: EmailPage, title: 'Email', icon: 'mail'},
      {page: CalcPage, title: 'Calculator', icon: 'calculator'},
      {page: HistoryPage, title: 'History', icon: 'archive'},
      {page: AboutPage, title: 'About', icon: 'information-circle'}
    ];
  }

  openPage(page) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

