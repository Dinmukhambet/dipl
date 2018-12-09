import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NotificationsProvider} from "../../providers/notificatins/notificatins";


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private notifications: NotificationsProvider) {
    if (this.isPayDay()) {
      notifications.init();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  isPayDay() {
    let date = new Date();
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return date.getDate() >= 21 && date.getDate() <= lastDay.getDate();
  }


}
