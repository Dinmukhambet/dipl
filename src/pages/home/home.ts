import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {Credential, StorageProvider} from "../../providers/storage/storage";
import {WelcomePage} from "../welcome/welcome";
import {RegistrationPage} from "../registration/registration";
import {EmailComposer} from "@ionic-native/email-composer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  creadential: Credential = new Credential();

  constructor(public navCtrl: NavController, private storageService: StorageProvider,
              private emailComposer: EmailComposer, private menuCtrl: MenuController) {
  }

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    //to disable menu, or
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu.
    this.menuCtrl.enable(true);
  }

  loginUser() {
    /*function hasUser(res) {
      return res.rows.item(0).exist === 1;
    }

    this.storageService.getAllUsers(this.creadential).then(res => {

      if (hasUser(res)) {
      }

    }).catch(err => {
      alert('rejected');
    });*/

    this.navCtrl.setRoot(WelcomePage);


  }

  toRegPage() {
    this.navCtrl.push(RegistrationPage);
  }

}
