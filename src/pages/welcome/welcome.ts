import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NotificationsProvider} from "../../providers/notificatins/notificatins";



@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private notifications: NotificationsProvider) {
    notifications.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
