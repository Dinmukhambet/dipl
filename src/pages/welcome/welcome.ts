import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NotificationsProvider} from "../../providers/notificatins/notificatins";
import {EmailPage} from "../email/email";
import {Credential, StorageProvider} from "../../providers/storage/storage";


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  credential: Credential;
  fullName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private notifications: NotificationsProvider, private storageService: StorageProvider) {
    this.credential = navParams.data;
    this.loadUserName();
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

  gotoEmail() {
    this.navCtrl.push(EmailPage);
  }

  loadUserName() {
    this.storageService.getUserName(this.credential).then(res => {
      this.fullName = res.rows.item(0).fullName;
    })
  }


}
