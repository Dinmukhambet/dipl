import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StorageProvider, User} from "../../providers/storage/storage";

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  user: User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService: StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  regUser() {
    this.storageService.createUser(this.user);

  }

}
