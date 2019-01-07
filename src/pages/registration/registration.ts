import {Component} from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {StorageProvider, User} from "../../providers/storage/storage";

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storageService: StorageProvider, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  ionViewDidEnter() {
    //to disable menu, or
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu.
    this.menuCtrl.enable(true);
  }

  regUser() {
    this.storageService.createUser(this.user);

  }

}
